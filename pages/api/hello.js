
 const handler = async (req, res) => {
    if (req.method === "GET") {
        console.log('sagar')
        res.send('hello')
    }

};

export default handler