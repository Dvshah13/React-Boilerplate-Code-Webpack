export function loadChannels(){
    console.log("reading a user");
    axios.get('https://slack.com/api/channels.list?token=xoxp-149583067808-149583068192-151035283029-15ba9dd0590cb47604b46933ee16c866&pretty=1')
      .then(res => {
          console.log(res);
        const channels = res.data.channels;
    return {
        type:"LOAD_CHANNELS",
        payload:{channels.name},
    }
}
