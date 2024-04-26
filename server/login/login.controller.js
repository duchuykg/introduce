const axios = require('axios');

class loginController {
    async getToken(req, res) {
        try {
            const data = req.body.data;

            const config = {
                method: "POST",
                maxBodyLength: Infinity,
                url: "https://api.utteranc.es/token",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };
            const response = await axios.request(config);
            res.json(response.data);
          } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
          }
    }

    async getUserData(req, res) {
        try {
            req.get("Authorization")
            const config = {
                method: 'GET',
                maxBodyLength: Infinity,
                url: 'https://api.github.com/user',
                headers: { 
                    'Accept': 'application/vnd.github.v3+json', 
                    'Authorization': req.get("Authorization")
                }
            };    

            const response = await axios.request(config);
            res.json(response.data);
          } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Login Error" });
          }
    }


}

module.exports = new loginController();
