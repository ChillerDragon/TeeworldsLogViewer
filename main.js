const defaultCode = () => {
    return [
        '2023-12-23 14:41:50 I engine: running on unix-linux-amd64',
        '2023-12-23 14:41:50 I engine: arch is little endian',
        '2023-12-23 14:41:50 I engine: operating system version: Linux 6.6.6-arch1-1 (x86_64, #1 SMP PREEMPT_DYNAMIC Mon, 11 Dec 2023 11:48:23 +0000); "Arch Linux"',
        '2023-12-23 14:41:50 I storage: couldn\'t open storage.cfg',
        '2023-12-23 14:41:50 I storage: using standard paths',
        '2023-12-23 14:41:50 I storage: added path \'$USERDIR\' (\'/home/chiller/.teeworlds\')',
        '2023-12-23 14:41:50 I storage: added path \'$DATADIR\' (\'/usr/share/ddnet/data\')',
        '2023-12-23 14:41:50 I storage: added path \'$CURRENTDIR\' (\'/home/chiller\')',
        '2023-12-23 14:41:50 I http: libcurl version 8.5.0 (compiled = 8.5.0)',
        '2023-12-23 14:41:50 I host_lookup: host=\'localhost\' port=0 1',
        '2023-12-23 14:41:50 I host_lookup: host=\'localhost\' port=0 2',
        '2023-12-23 14:41:50 I console: executing \'autoexec_server.cfg\'',
        '2023-12-23 14:41:50 I chatresp: No such command: sv_chat_ratelimit_non_calls.',
        '2023-12-23 14:41:50 I chatresp: No such command: sv_chat_ratelimit_debug.',
        '2023-12-23 14:41:50 I chatresp: No such command: sv_chat_ratelimit_public_chat.',
        '2023-12-23 14:41:50 I chatresp: No such command: sv_countdown_unpause.',
        '2023-12-23 14:41:50 I chatresp: No such command: sv_show_settings_motd.',
        '2023-12-23 14:41:50 I chatresp: No such command: sv_fastcap.',
        '2023-12-23 14:41:50 I console: moderator access for \'echo\' is now enabled',
        '2023-12-23 14:41:50 I console: helper access for \'echo\' is now disabled',
        '2023-12-23 14:41:50 I console: user access for \'echo\' is now disabled',
        '2023-12-23 14:41:50 I console: moderator access for \'broadcast\' is now enabled',
        '2023-12-23 14:41:50 I console: helper access for \'broadcast\' is now disabled',
        '2023-12-23 14:41:50 I console: user access for \'broadcast\' is now disabled',
        '2023-12-23 14:41:50 I console: moderator access for \'say\' is now enabled',
        '2023-12-23 14:41:50 I console: moderator access for \'access_status\' is now enabled',
        '2023-12-23 14:41:50 I console: helper access for \'access_status\' is now disabled',
        '2023-12-23 14:41:50 I console: user access for \'access_status\' is now disabled',
        '2023-12-23 14:41:50 I server: starting...',
        '2023-12-23 14:41:50 I server: using port 8303',
        '2023-12-23 14:41:50 I server: server name is \'ChillerDragon\'s gCTF/iCTF GER1 [0.6/0.7 bridge]\'',
        '2023-12-23 14:41:50 I git-revision: 511b6565750120eb',
        '2023-12-23 14:41:50 I server: version 17.4.2 on linux amd64',
        '2023-12-23 14:41:50 I server: git revision hash: 511b6565750120eb',
        '2023-12-23 14:41:50 I register/6/ipv6: registering...',
        '2023-12-23 14:41:50 I register/6/ipv4: registering...',
        '2023-12-23 14:41:50 I register/7/ipv6: registering...',
        '2023-12-23 14:41:50 I register/7/ipv4: registering...',
        '2023-12-23 14:41:50 I sql: [2] load best time done on read database 0',
        '2023-12-23 14:41:50 I http: https://master1.ddnet.org/ddnet/15/register failed. libcurl error (7): Failed to connect to master1.ddnet.org port 443 after 5 ms: Couldn\'t connect to server',
        '2023-12-23 14:41:50 E register/6/ipv6: error response from master',
        '2023-12-23 14:41:50 I http: https://master1.ddnet.org/ddnet/15/register failed. libcurl error (7): Failed to connect to master1.ddnet.org port 443 after 5 ms: Couldn\'t connect to server',
        '2023-12-23 14:41:50 E register/7/ipv6: error response from master'
    ].join('\n');
}

const getCode = async () => {
    const params = new URLSearchParams(document.location.search);
    const url = params.get('url') ? params.get('url') : null
    if(!url) {
        return defaultCode()
    }
    return await (await fetch(url)).text()
}
