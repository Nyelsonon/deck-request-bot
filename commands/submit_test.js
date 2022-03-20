var request = require('superagent');

module.exports.run = async (bot, message, args) => {
    var formId = '1FAIpQLSfmxCKkxSJneXMhIbXr7nGMZq-xnQr8GQ8-I_wrb0z0Ts7Tbg';
    var fields = {
      name: 'entry.1266354808',
      league: 'entry.1584363720',
      rank: 'entry.294630806',
      faction: 'entry.1779309054',
      type: 'entry.2042179691',
      cards: 'entry.1493890616',
      maker: 'entry.689476002',
      other: 'entry.496446009'
    }
    
    request
      .post(`https://docs.google.com/forms/d/e/${formId}/formResponse`)
      .type('form')
      .send({ 
        [fields.name]: 'Nyelson#7987',
        [fields.league]: 'Diamond',
        [fields.rank]: '5',
        [fields.faction]: 'Ironclad',
        [fields.type]: 'Rush',
        [fields.cards]: 'Saberpaws',
        [fields.maker]: 'Nyelson#7987',
        [fields.other]: 'hello'
      })
      .end(function(err, res){
        if (err || !res.ok) {
          console.error(err);
        } else {
          console.log(res.body);
        }
      });

      message.channel.send('Submitted test form succesfully!');
}

module.exports.help = {
    name:"submit_test"
}
