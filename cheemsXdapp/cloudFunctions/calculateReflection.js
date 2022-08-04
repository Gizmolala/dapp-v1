/**
 * Cloud Function to calculate total amount IN and OUT of currently logged In wallet
 */
Moralis.Cloud.define("calculateReflection", async (request) => {
    const dummyAddress = ''
    const ethAddress = dummyAddress ? dummyAddress : request.user.get('ethAddress')

    // calculate total Out
    const queryOut = new Moralis.Query("cheemsXtransfer")
    queryOut.equalTo("from", ethAddress)
    const amountOut = await queryOut.find()
    const amountOutTotal = amountOut.reduce((prev, curr) => {
        let amount = Moralis.Cloud.units({
            method: "fromWei",
            value: curr.get('value'),
            decimals: 18
        })
        return prev + Number(amount)
    }, 0)

    // calculate total In
    const queryIn = new Moralis.Query("cheemsXtransfer")
    queryIn.equalTo("to", ethAddress)
    const amountIn = await queryIn.find()
    const amountInTotal = amountIn.reduce((prev, curr) => {
        let amount = Moralis.Cloud.units({
            method: "fromWei",
            value: curr.get('value'),
            decimals: 18
        })
        return prev + Number(amount)
    }, 0)

    return {
        amountInTotal, amountOutTotal
    }
}, {
    // fields: ['fieldname'],
    requireUser: true
})