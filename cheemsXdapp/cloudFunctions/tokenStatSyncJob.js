/**
 * Schedule Job to fetch cheemsX pricing info from dexscreener
 */
Moralis.Cloud.job("fetchTokenStat", async (request) => {
    const logger = Moralis.Cloud.getLogger()
    try {
        const statData = await Moralis.Cloud.httpRequest({
            url: 'https://api.dexscreener.io/latest/dex/tokens/0x726573a7774317DD108ACcb2720Ac9848581F01D',
            headers: {
                'method': 'GET',
                'accept': 'application/json'
            }
        })
        const stat = statData.data
        // logger.info(JSON.stringify(stat.pairs[0].liquidity))
        const TokenStat = Moralis.Object.extend("TokenStat")
        const tokenStat = new TokenStat()
        tokenStat.set('stat', stat.pairs[0])
        await tokenStat.save()

        logger.info('TokenStat inserted...')
    } catch (error) {
        logger.error('Request failed with response code ' + error)
    }
})