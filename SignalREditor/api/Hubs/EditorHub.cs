using System;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace SignalREditor.Hubs 
{
    [EnableCors("CorsPolicy")]
    public class EditorHub : Hub
    {
        public async Task textChanged(Object delta)
        {
            await Clients.All.SendAsync("textChanged", delta);
        }
    }
}