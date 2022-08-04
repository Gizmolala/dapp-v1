/**
 * Moralis Schedule Job for fetch and save treasury assets to the DB
 */

Moralis.Cloud.job("fetchAndSaveTreasuryAssets", async (request) => {
    const logger = Moralis.Cloud.getLogger()
    try {
        // fetch the tokens in treasury wallet
        let tokens = await Moralis.Web3API.account.getTokenBalances({
            chain: 'avalanche',
            address: '0xf0b6c436dd743daad19fd1e87cbe86eed9f122df'
        })
        logger.info('TreasuryBalance TreasuryTokens: ' + JSON.stringify(tokens))
        const token_address = tokens.map(token => token.token_address)
        // get the price from dexscreener
        const dexUrl = `https://api.dexscreener.io/latest/dex/tokens/${token_address.join(',')}`
        const statData = await Moralis.Cloud.httpRequest({
            url: dexUrl,
            headers: {
                'method': 'GET',
                'accept': 'application/json'
            }
        })
        const price = statData.data
        logger.info('TreasuryBalance dexUrl: ' + dexUrl)

        // merge price and other info
        tokens.forEach(token => {
            let priceObj = price.pairs.find(item => item.baseToken.address.toLowerCase() === token.token_address.toLowerCase())
            token.price = priceObj ? priceObj.priceUsd : 0
            token.exchange = priceObj ? priceObj.dexId : '---'
            token.balanceDecimal = Moralis.Cloud.units({
                method: "fromWei",
                value: token.balance,
                decimals: token.decimals
            })
            token.totalPrice = priceObj ? token.balanceDecimal * priceObj.priceUsd : 0
        })

        // total USD balance
        const totalBalanceUsd = tokens.reduce((prev, curr) => prev + curr.totalPrice, 0)

        // average price
        tokens.forEach(token => {
            token.avg = token.totalPrice / totalBalanceUsd * 100
        })

        // sort by total USD price
        const sorted = [...tokens].sort((a, b) => b.totalPrice - a.totalPrice)
        tokens = sorted

        // logger.info(JSON.stringify())

        // ========== SAVE in the DB =======================
        const TreasuryBalance = Moralis.Object.extend("TreasuryBalance")
        const record = new TreasuryBalance()
        record.set('tokens', tokens)
        record.set('totalBalanceUsd', totalBalanceUsd)
        await record.save()

        logger.info('TreasuryBalance inserted...')
    } catch (error) {
        logger.error('Request failed with response code ' + error)
    }
})