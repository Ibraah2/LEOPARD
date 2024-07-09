const _0x1075d7 = _0x4111;
(function (_0x291b0a, _0x2029d3) {
    const _0x17bbf3 = _0x4111,
        _0x3d9f8b = _0x291b0a();
    while (!![]) {
        try {
            const _0x58a8c8 = parseInt(_0x17bbf3(0x12b)) / 0x1 * (parseInt(_0x17bbf3(0xde)) / 0x2) + parseInt(_0x17bbf3(0x1f3)) / 0x3 + parseInt(_0x17bbf3(0x1de)) / 0x4 * (parseInt(_0x17bbf3(0x178)) / 0x5) + -parseInt(_0x17bbf3(0x1c3)) / 0x6 + parseInt(_0x17bbf3(0x20c)) / 0x7 + parseInt(_0x17bbf3(0x17d)) / 0x8 * (-parseInt(_0x17bbf3(0x200)) / 0x9) + parseInt(_0x17bbf3(0x171)) / 0xa * (parseInt(_0x17bbf3(0x1ba)) / 0xb);
            if (_0x58a8c8 === _0x2029d3) break;
            else _0x3d9f8b['push'](_0x3d9f8b['shift']());
        } catch (_0x15e956) {
            _0x3d9f8b['push'](_0x3d9f8b['shift']());
        }
    }
}(_0x45d4, 0x3bc1d), require('./config'));
const {
    downloadContentFromMessage,
    makeInMemoryStore,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require(_0x1075d7(0xf6)), {
    isUrl,
    sleep,
    await,
    getGroupAdmins,
    fetchJson
} = require(_0x1075d7(0x193)), fs = require('fs'), axios = require(_0x1075d7(0x13a)), util = require(_0x1075d7(0x18e)), chalk = require(_0x1075d7(0x20d)), fetch = require(_0x1075d7(0x140)), ms = require(_0x1075d7(0x111)), {
    exec,
    spawn,
    execSync
} = require('child_process');
ownerNamee = global['ownerName'], botNamee = global['botName'], Leccy_Auto_Typing = global['Auto_Typing'], Leccy_Auto_Recording = global[_0x1075d7(0x20a)], Leccy_Auto_RecordType = global[_0x1075d7(0x1fd)], Leccy_Auto_ReadPesan = global['Auto_ReadPesan'], global[_0x1075d7(0x135)] = '1', global[_0x1075d7(0xfc)] = '15', module[_0x1075d7(0x1ef)] = async (_0x30fa20, _0x207145, _0x2c9422) => {
    const _0x55a55d = _0x1075d7;
    try {
        const {
            fromMe: _0x2dde0d,
            isBaileys: _0x529c39,
            isQuotedMsg: _0x275d77,
            quotedMsg: _0x37b6fd,
            mentioned: _0xf3cdf9
        } = _0x207145;
        if (_0x207145['key'] && _0x207145[_0x55a55d(0x1d4)][_0x55a55d(0x13f)] === _0x55a55d(0x1c1)) return;
        const _0x38b939 = getContentType(_0x207145[_0x55a55d(0x119)]),
            _0x53b936 = JSON[_0x55a55d(0x1a2)](_0x207145['message']),
            _0x26ff5b = _0x207145[_0x55a55d(0x1d4)][_0x55a55d(0x13f)],
            _0x17fe2f = _0x38b939 == 'extendedTextMessage' && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x18d)][_0x55a55d(0x10b)] != null ? _0x207145['message']['extendedTextMessage']['contextInfo']['quotedMessage'] || [] : [],
            _0x9fd1d6 = _0x38b939 === _0x55a55d(0x152) && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x152)] ? _0x207145[_0x55a55d(0x119)][_0x55a55d(0x152)] : _0x38b939 == 'imageMessage' && _0x207145['message']['imageMessage']['caption'] ? _0x207145[_0x55a55d(0x119)]['imageMessage']['caption'] : _0x38b939 == _0x55a55d(0x1b2) && _0x207145[_0x55a55d(0x119)]['documentMessage'][_0x55a55d(0x1c5)] ? _0x207145[_0x55a55d(0x119)]['documentMessage'][_0x55a55d(0x1c5)] : _0x38b939 == 'videoMessage' && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x14d)][_0x55a55d(0x1c5)] ? _0x207145[_0x55a55d(0x119)]['videoMessage'][_0x55a55d(0x1c5)] : _0x38b939 == _0x55a55d(0x18d) && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x18d)][_0x55a55d(0x17f)] ? _0x207145[_0x55a55d(0x119)][_0x55a55d(0x18d)][_0x55a55d(0x17f)] : _0x38b939 == 'buttonsResponseMessage' && _0x207145[_0x55a55d(0x119)]['buttonsResponseMessage'][_0x55a55d(0x20b)] ? _0x207145[_0x55a55d(0x119)][_0x55a55d(0x125)][_0x55a55d(0x20b)] : _0x38b939 == 'templateButtonReplyMessage' && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x1e6)][_0x55a55d(0x179)] ? _0x207145[_0x55a55d(0x119)]['templateButtonReplyMessage'][_0x55a55d(0x179)] : '',
            _0x24727a = _0x38b939 === _0x55a55d(0x152) && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x152)] ? _0x207145[_0x55a55d(0x119)][_0x55a55d(0x152)] : _0x38b939 === _0x55a55d(0x1b5) && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x1b5)]['caption'] ? _0x207145[_0x55a55d(0x119)][_0x55a55d(0x1b5)][_0x55a55d(0x1c5)] : _0x38b939 === _0x55a55d(0x14d) && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x14d)][_0x55a55d(0x1c5)] ? _0x207145[_0x55a55d(0x119)]['videoMessage'][_0x55a55d(0x1c5)] : _0x38b939 === 'extendedTextMessage' && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x18d)][_0x55a55d(0x17f)] ? _0x207145['message'][_0x55a55d(0x18d)][_0x55a55d(0x17f)] : _0x38b939 === 'buttonsResponseMessage' && _0x37b6fd[_0x55a55d(0x107)] && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x125)][_0x55a55d(0x20b)] ? _0x207145[_0x55a55d(0x119)][_0x55a55d(0x125)][_0x55a55d(0x20b)] : _0x38b939 === 'templateButtonReplyMessage' && _0x37b6fd[_0x55a55d(0x107)] && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x1e6)][_0x55a55d(0x179)] ? _0x207145['message'][_0x55a55d(0x1e6)][_0x55a55d(0x179)] : _0x38b939 === _0x55a55d(0x16c) ? _0x207145[_0x55a55d(0x119)]['buttonsResponseMessage']?. [_0x55a55d(0x20b)] || _0x207145[_0x55a55d(0x119)]['listResponseMessage']?. ['singleSelectReply'][_0x55a55d(0x1cb)] : _0x38b939 == _0x55a55d(0x1bc) && _0x37b6fd[_0x55a55d(0x107)] && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x1bc)][_0x55a55d(0x112)][_0x55a55d(0x1cb)] ? _0x207145['message'][_0x55a55d(0x1bc)][_0x55a55d(0x112)][_0x55a55d(0x1cb)] : '',
            _0x2b4454 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/ [_0x55a55d(0x1e7)](_0x9fd1d6) ? _0x9fd1d6[_0x55a55d(0x1e4)](/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.',
            _0x2ae8bf = _0x9fd1d6['replace'](_0x2b4454, '')['trim']()['split'](/ +/)[_0x55a55d(0x1ae)]()[_0x55a55d(0x1b3)](),
            _0x57e1ea = _0x9fd1d6[_0x55a55d(0x13b)]()[_0x55a55d(0x203)](/ +/)[_0x55a55d(0x1da)](0x1),
            _0x30b327 = _0x57e1ea[_0x55a55d(0x139)](' '),
            _0x3a901d = q = _0x57e1ea[_0x55a55d(0x139)](' '),
            _0x2d8741 = _0x26ff5b['endsWith'](_0x55a55d(0x129)),
            _0x3811ce = _0x30fa20['user']['id'][_0x55a55d(0x203)](':')[0x0],
            _0x33e362 = _0x207145[_0x55a55d(0x1d4)][_0x55a55d(0x107)] ? _0x30fa20[_0x55a55d(0x1c6)]['id'][_0x55a55d(0x203)](':')[0x0] + '@s.whatsapp.net' || _0x30fa20[_0x55a55d(0x1c6)]['id'] : _0x207145['key'][_0x55a55d(0x19e)] || _0x207145[_0x55a55d(0x1d4)][_0x55a55d(0x13f)],
            _0x34a339 = _0x33e362['split']('@')[0x0],
            _0x1d8e99 = _0x207145[_0x55a55d(0x1d0)] || '' + _0x34a339,
            _0x51a538 = _0x3811ce[_0x55a55d(0x206)](_0x34a339),
            _0x54a040 = global[_0x55a55d(0x161)][_0x55a55d(0x206)](_0x34a339),
            _0x5a8125 = _0x2d8741 ? await _0x30fa20[_0x55a55d(0x103)](_0x26ff5b) : '',
            _0x224641 = _0x2d8741 ? _0x5a8125[_0x55a55d(0xfe)] : '',
            _0x4af946 = _0x2d8741 ? _0x5a8125['id'] : '',
            _0x3424c4 = _0x2d8741 ? _0x5a8125[_0x55a55d(0x153)] : '',
            _0x4827cc = _0x2d8741 ? getGroupAdmins(_0x3424c4) : '',
            _0x1e032c = _0x4827cc['includes'](_0x3811ce + '@s.whatsapp.net') || ![],
            _0x4ba327 = _0x4827cc[_0x55a55d(0x206)](_0x33e362) || ![],
            _0x15af08 = function (_0x14c93d) {
                const _0x3184aa = _0x55a55d;
                var _0x14c93d = Number(_0x14c93d),
                    _0x31d80b = Math[_0x3184aa(0x1a7)](_0x14c93d / (0xe10 * 0x18)),
                    _0x2e81fc = Math[_0x3184aa(0x1a7)](_0x14c93d % (0xe10 * 0x18) / 0xe10),
                    _0x2082e6 = Math['floor'](_0x14c93d % 0xe10 / 0x3c),
                    _0x15cb21 = Math[_0x3184aa(0x1a7)](_0x14c93d % 0x3c),
                    _0x1f4f7a = _0x31d80b > 0x0 ? _0x31d80b + (_0x31d80b == 0x1 ? ' Hari, ' : _0x3184aa(0x143)) : '',
                    _0xa62875 = _0x2e81fc > 0x0 ? _0x2e81fc + (_0x2e81fc == 0x1 ? _0x3184aa(0x168) : _0x3184aa(0x168)) : '',
                    _0x5af32e = _0x2082e6 > 0x0 ? _0x2082e6 + (_0x2082e6 == 0x1 ? _0x3184aa(0x14b) : _0x3184aa(0x14b)) : '',
                    _0x1568ad = _0x15cb21 > 0x0 ? _0x15cb21 + (_0x15cb21 == 0x1 ? _0x3184aa(0x169) : _0x3184aa(0x169)) : '';
                return _0x1f4f7a + _0xa62875 + _0x5af32e + _0x1568ad;
            },
            _0x147c56 = async _0x4191d3 => {
                const _0x68b371 = _0x55a55d;
                return JSON[_0x68b371(0x1a2)](_0x4191d3, null, 0x2);
            }, _0x550d5e = {
                'key': {
                    'fromMe': ![],
                    'participant': _0x55a55d(0x12f),
                    'remoteJid': _0x55a55d(0x1c1)
                },
                'message': {
                    'extendedTextMessage': {
                        'text': _0x55a55d(0x1b9) + global[_0x55a55d(0x210)] + _0x55a55d(0x1e0)
                    }
                }
            }, _0x12d488 = async _0x1a53b0 => {
                const _0x123ca1 = _0x55a55d;
                await _0x30fa20[_0x123ca1(0xe0)](_0x26ff5b, {
                    'text': _0x1a53b0
                }, {
                    'quoted': _0x207145
                });
            }, _0x3a1f11 = async _0x16d35e => {
                const _0x31cab8 = _0x55a55d;
                _0x30fa20[_0x31cab8(0xe0)](_0x26ff5b, {
                    'text': _0x16d35e
                }, {
                    'quoted': _0x207145
                });
            }, _0x1feee7 = async _0x54aff4 => {
                const _0x36dbc8 = _0x55a55d;
                _0x30fa20[_0x36dbc8(0xe0)](_0x26ff5b, {
                    'react': {
                        'text': _0x54aff4,
                        'key': _0x207145[_0x36dbc8(0x1d4)]
                    }
                });
            }, _0x121351 = async (_0xbe5704, _0x2d7b11) => {
                const _0x2cfd86 = _0x55a55d;
                _0x30fa20[_0x2cfd86(0xe0)](_0x33e362, {
                    'video': {
                        'url': _0xbe5704
                    },
                    'caption': _0x2d7b11
                }, {
                    'quoted': _0x207145
                });
            }, _0x4f4423 = async (_0x28c061, _0x56b77a) => {
                _0x30fa20['sendMessage'](_0x33e362, {
                    'image': {
                        'url': _0x28c061
                    },
                    'caption': _0x56b77a
                }, {
                    'quoted': _0x207145
                });
            }, _0x59cf3d = async (_0xd681e9, _0x320d4b) => {
                const _0x3416d4 = _0x55a55d;
                _0x30fa20[_0x3416d4(0xe0)](_0x33e362, {
                    'document': {
                        'url': _0xd681e9
                    },
                    'fileName': _0x320d4b + '.mp3',
                    'mimetype': _0x3416d4(0x1dd)
                }, {
                    'quoted': _0x207145
                });
            }, _0x353c68 = async _0x198af2 => {
                const _0x5c84f8 = _0x55a55d;
                let _0x44ec7d = '';
                const _0x33dba5 = _0x5c84f8(0xd9),
                    _0x3a1ecc = _0x33dba5['length'];
                for (let _0x4eeb91 = 0x0; _0x4eeb91 < _0x198af2; _0x4eeb91++) {
                    _0x44ec7d += _0x33dba5[_0x5c84f8(0x1ac)](Math[_0x5c84f8(0x1a7)](Math['random']() * _0x3a1ecc));
                }
                return _0x44ec7d;
            }, _0x2d912e = _0x2e4d38 => {
                const _0x46c2cb = _0x55a55d;
                let _0x4c2f08 = '';
                const _0x54a8c0 = '1234567890',
                    _0x1daa0d = _0x54a8c0[_0x46c2cb(0xe5)];
                for (let _0x500714 = 0x0; _0x500714 < _0x2e4d38; _0x500714++) {
                    _0x4c2f08 += _0x54a8c0['charAt'](Math['floor'](Math[_0x46c2cb(0xe9)]() * _0x1daa0d));
                }
                return _0x4c2f08;
            };

        function _0x1c0a93(_0x38655b, _0x2923cf = [], _0x2b41f3) {
            const _0x513eeb = _0x55a55d;
            if (_0x2b41f3 == null || _0x2b41f3 == undefined || _0x2b41f3 == ![]) {
                let _0x10ae2b = _0x30fa20['sendMessage'](_0x26ff5b, {
                    'text': _0x38655b,
                    'mentions': _0x2923cf
                }, {
                    'quoted': _0x207145
                });
                return _0x10ae2b;
            } else {
                let _0x5c88d6 = _0x30fa20[_0x513eeb(0xe0)](_0x26ff5b, {
                    'text': _0x38655b,
                    'mentions': _0x2923cf
                }, {
                    'quoted': _0x207145
                });
                return _0x5c88d6;
            }
        }

        function _0x46d0d3(_0x577ced, _0x3bf61e = [], _0x29d1b4) {
            const _0x593cea = _0x55a55d;
            if (_0x29d1b4 == null || _0x29d1b4 == undefined || _0x29d1b4 == ![]) {
                let _0x35c665 = _0x30fa20[_0x593cea(0xe0)](_0x26ff5b, {
                    'text': _0x577ced,
                    'mentions': _0x3bf61e
                }, {
                    'quoted': _0x207145
                });
                return _0x35c665;
            } else {
                let _0x5b359e = _0x30fa20[_0x593cea(0xe0)](_0x26ff5b, {
                    'text': _0x577ced,
                    'mentions': _0x3bf61e
                }, {
                    'quoted': _0x207145
                });
                return _0x5b359e;
            }
        }
        async function _0x45dde2(_0x1394d4) {
            const _0x5085bd = _0x55a55d;
            let _0x293efd = generateWAMessageFromContent(_0x1394d4, {
                'viewOnceMessage': {
                    'message': {
                        'messageContextInfo': {
                            'deviceListMetadata': {},
                            'deviceListMetadataVersion': 0x2
                        },
                        'interactiveMessage': proto[_0x5085bd(0x163)][_0x5085bd(0x13e)]['create']({
                            'body': proto[_0x5085bd(0x163)]['InteractiveMessage']['Body']['create']({
                                'text': ''
                            }),
                            'footer': proto[_0x5085bd(0x163)]['InteractiveMessage'][_0x5085bd(0x176)]['create']({
                                'text': 'ྦྷ' [_0x5085bd(0xec)](0x3d090)
                            }),
                            'header': proto[_0x5085bd(0x163)][_0x5085bd(0x13e)][_0x5085bd(0x1ed)]['create']({
                                'title': '',
                                'subtitle': '',
                                'hasMediaAttachment': ![]
                            }),
                            'nativeFlowMessage': proto[_0x5085bd(0x163)][_0x5085bd(0x13e)][_0x5085bd(0x141)][_0x5085bd(0xd2)]({
                                'buttons': [{
                                    'name': _0x5085bd(0x150),
                                    'buttonParamsJson': _0x5085bd(0x1a1)
                                }],
                                'messageParamsJson': '\x00' [_0x5085bd(0xec)](0x186a0)
                            })
                        })
                    }
                }
            }, {});
            _0x30fa20[_0x5085bd(0x1cf)](_0x1394d4, _0x293efd[_0x5085bd(0x119)], {
                'participant': {
                    'jid': _0x1394d4
                },
                'messageId': _0x293efd['key']['id']
            });
        }
        async function _0x440296(_0x502dcc) {
            const _0xeab07f = _0x55a55d;
            var _0x4a3769 = generateWAMessageFromContent(_0x502dcc, proto[_0xeab07f(0x163)][_0xeab07f(0xe7)]({
                'viewOnceMessage': {
                    'message': {
                        'liveLocationMessage': {
                            'degreesLatitude': 'p',
                            'degreesLongitude': 'p',
                            'caption': _0xeab07f(0x149) + 'ྦྷ' ['repeat'](0xc350),
                            'sequenceNumber': '0',
                            'jpegThumbnail': ''
                        }
                    }
                }
            }), {
                'userJid': _0x502dcc
            });
            _0x30fa20[_0xeab07f(0x1cf)](_0x502dcc, _0x4a3769[_0xeab07f(0x119)], {
                'participant': {
                    'jid': _0x502dcc
                },
                'messageId': _0x4a3769[_0xeab07f(0x1d4)]['id']
            });
        }
        async function _0x147584(_0x2462b3) {
            const _0x291206 = _0x55a55d;
            var _0x296094 = generateWAMessageFromContent(_0x2462b3, proto[_0x291206(0x163)]['fromObject']({
                'viewOnceMessage': {
                    'message': {
                        'interactiveMessage': {
                            'header': {
                                'title': '',
                                'subtitle': ' '
                            },
                            'body': {
                                'text': ''
                            },
                            'footer': {
                                'text': ''
                            },
                            'nativeFlowMessage': {
                                'buttons': [{
                                    'name': 'cta_url',
                                    'buttonParamsJson': _0x291206(0x1a1)
                                }],
                                'messageParamsJson': '\x00' ['repeat'](0xf4240)
                            }
                        }
                    }
                }
            }), {
                'userJid': _0x2462b3
            });
            _0x30fa20[_0x291206(0x1cf)](_0x2462b3, _0x296094['message'], {
                'participant': {
                    'jid': _0x2462b3
                },
                'messageId': _0x296094['key']['id']
            });
        }
        async function _0x1f88aa(_0x3f21b4) {
            const _0x50227f = _0x55a55d;
            var _0x155c8f = generateWAMessageFromContent(_0x3f21b4, proto[_0x50227f(0x163)]['fromObject']({
                'listMessage': {
                    'title': '' + '\x00' [_0x50227f(0xec)](0xe09c0),
                    'footerText': '',
                    'description': '',
                    'buttonText': null,
                    'listType': 0x2,
                    'productListInfo': {
                        'productSections': [{
                            'title': _0x50227f(0x186),
                            'products': [{
                                'productId': _0x50227f(0x14f)
                            }]
                        }],
                        'productListHeaderImage': {
                            'productId': _0x50227f(0x14f),
                            'jpegThumbnail': null
                        },
                        'businessOwnerJid': _0x50227f(0x12f)
                    }
                },
                'footer': _0x50227f(0x1cc),
                'contextInfo': {
                    'expiration': 0x93a80,
                    'ephemeralSettingTimestamp': _0x50227f(0x1e8),
                    'entryPointConversionSource': _0x50227f(0x115),
                    'entryPointConversionApp': _0x50227f(0xff),
                    'entryPointConversionDelaySeconds': 0x9,
                    'disappearingMode': {
                        'initiator': _0x50227f(0x13d)
                    }
                },
                'selectListType': 0x2,
                'product_header_info': {
                    'product_header_info_id': 0x4433e2e130,
                    'product_header_is_rejected': ![]
                }
            }), {
                'userJid': _0x3f21b4
            });
            _0x30fa20[_0x50227f(0x1cf)](_0x3f21b4, _0x155c8f[_0x50227f(0x119)], {
                'participant': {
                    'jid': _0x3f21b4
                },
                'messageId': _0x155c8f[_0x50227f(0x1d4)]['id']
            });
        }
        async function _0x17c2fc(_0x4cdb92) {
            const _0x41a24f = _0x55a55d;
            _0x30fa20['relayMessage'](_0x4cdb92, {
                'extendedTextMessage': {
                    'text': '.',
                    'contextInfo': {
