try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7b782948-d00a-4e4a-bdb2-3c6357cf31ab", e._sentryDebugIdIdentifier = "sentry-dbid-7b782948-d00a-4e4a-bdb2-3c6357cf31ab")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["570"], {
        31709: function(e, t, o) {
            o.d(t, {
                GL: () => s,
                PT: () => m,
                pi: () => l
            });
            var a, n = o(56053);
            let r = {
                    stage: 1,
                    notifyContactsMode: 2,
                    customContactUserIds: void 0,
                    exceptionContactUserIds: void 0,
                    OTPValidationLoading: !1,
                    ChangePhoneNumberLoading: !1,
                    newPhoneNumber: "",
                    countryCode: "",
                    errors: {
                        change: "",
                        confirm: ""
                    }
                },
                i = (0, n.Z0)({
                    name: "changePhoneNumberSlice",
                    initialState: r,
                    reducers: {
                        changeStage(e, t) {
                            e.stage = t.payload
                        },
                        setNotifyContactMode(e, t) {
                            e.notifyContactsMode = t.payload
                        },
                        setCustomContactIds(e, t) {
                            e.customContactUserIds = t.payload
                        },
                        setExceptionContactIds(e, t) {
                            e.exceptionContactUserIds = t.payload
                        },
                        setOTPValidationLoading(e, t) {
                            e.OTPValidationLoading = t.payload
                        },
                        setChangePhoneNumberLoading(e, t) {
                            e.ChangePhoneNumberLoading = t.payload
                        },
                        setNewPhoneNumber(e, t) {
                            e.newPhoneNumber = t.payload
                        },
                        resetToInitialState: () => r,
                        setCountryCode(e, t) {
                            e.countryCode = t.payload
                        },
                        setChangeError(e, t) {
                            e.errors.change = t.payload
                        },
                        setConfirmChangeError(e, t) {
                            e.errors.confirm = t.payload
                        }
                    }
                }),
                s = i.reducer;
            var l = ((a = {}).ChangePhoneNumber = "ChangePhoneNumber", a.OTPValidation = "OTPValidation", a.SendNotifContacts = "SendNotifContacts", a);
            let c = (0, n.VP)("ChangePhoneNumber"),
                d = (0, n.VP)("OTPValidation"),
                u = (0, n.VP)("SendNotifContacts"),
                m = {
                    ...i.actions,
                    changePhoneNumber: c,
                    validateOTP: d,
                    sendNotifContactsAction: u
                }
        },
        42993: function(e, t, o) {
            o.r(t), o.d(t, {
                strings: () => n
            });
            var a = o(339);
            o(31709);
            let n = {
                name: "New Web",
                confirm_code: "Confirm code",
                nums: {
                    one: "One",
                    k: "Thousand",
                    m: "Million",
                    b: "Billion",
                    t: "Trillion"
                },
                download_errors: {
                    banned_file: "This content has been blocked and can not be downloaded."
                },
                send: "Send",
                submit: "Submit and Continue",
                submit_and_send: "Submit and Send",
                submit_and_next: "Submit and Next",
                submit_and_payment: "Submit and Pay",
                send_message: "Send Message",
                back: "Back",
                close: "Close",
                confirm: "Confirm",
                error: "Error",
                return_to_bale: "Return to 'Bale'",
                draft: "Draft",
                recipient: "recipient",
                recipients: "recipients",
                signout: "Sign Out",
                signout_modal: {
                    title: "Sign out of the account",
                    desc: "Are you sure you want to sign out of your account?",
                    confirm: "Sign Out"
                },
                video_player: {
                    speed: {
                        "0_2": "Very slow",
                        "0_5": "Slow",
                        1: "Normal",
                        "1_5": "Fast",
                        2: "Very Fast"
                    }
                },
                reaction_management_modal: {
                    all: {
                        title: "All Reactions",
                        desc: "Members of {groupString} can use all emojis for reactions."
                    },
                    some: {
                        title: "Select Some Reactions",
                        desc: "Members of {groupString} can use emojis selected below for reactions."
                    },
                    none: {
                        title: "No Reactions",
                        desc: "Members of {groupString} cannot react to messages with any emojis."
                    },
                    emoji_list_title: "Reaction Emojis"
                },
                reactionsWarningModal: {
                    title: "Reactions List",
                    description: "Other group members can see your reaction in the reactions list."
                },
                reactioners: {
                    others: "{count} other members",
                    count: "{count} members",
                    reaction: "{count} reaction"
                },
                seeners: {
                    seen: "{count} Seen"
                },
                date_time: {
                    minute_ago: "less than a minute ago",
                    hour_ago: "{minute} minutes ago",
                    today_ago: "at {time}",
                    yesterday_ago: "yesterday at {time}",
                    month_ago: "at {weekday} {day} {month}",
                    year_ago: "at {day} {month}",
                    else_ago: "at {month} {year}",
                    seconds_ago: "{seconds} seconds ago",
                    minutes_ago: "{minutes} minutes ago",
                    hours_ago: "{hours} hours ago",
                    days_ago: "{days} days ago",
                    weeks_ago: "{weeks} weeks ago",
                    months_ago: "{months} months ago"
                },
                justmine_delete: "Are you sure you want to delete this message for yourself?",
                justmine_delete_multiple: "Are you sure you want to delete these messages for yourself?",
                really_delete: "Are you sure you want to delete this message?",
                really_delete_multiple: "Are you sure you want to delete these messages?",
                really_delete_for_all: "Are you sure you want to delete this message for everyone?",
                really_delete_for_all_multiple: "Are you sure you want to delete these messages for everyone?",
                delete_message: "Delete Message",
                delete_count_message: "Delete {count} Messages",
                delete_access_types: {
                    JustMine: "This message will be deleted only for you.",
                    ForAllPrivate: 'And this message will be deleted for "{name}".',
                    ForAllGroups: "It will be deleted for all members."
                },
                GroupType: {
                    0: "Group",
                    1: "Channel",
                    2: "Group"
                },
                general_app_crash_error: "An error occurred in the application! Please refresh the page.",
                refresh_page: "Refresh Page",
                ok: "OK",
                search: "Search Message",
                search_user: "Search User",
                search_no_result: "No results found.",
                save_changes: "Save Changes",
                abort: "Cancel",
                add: "Add",
                for: "For",
                start: "Start",
                about: "To start, select one of the conversations",
                channel_subscriber_plural: "Subscribers",
                channel_subscriber_singular: "Subscriber",
                group_member_plural: "Members",
                group_member_singular: "Memeber",
                purchase: "Purchase",
                irr: "IRR",
                purchase_details: "Purchase Details",
                cost: "Cost",
                stickers: {
                    delete_recent_sticker_header: "Delete Recent Sticker",
                    delete_recent_sticker_body: "Do you want to delete this sticker from your recent stickers?",
                    delete: "Delete Sticker",
                    menu: {
                        send_sticker: "Send Sticker",
                        schedule_sticker: "Schedule Sticker",
                        delete_recent_sticker: "Delete Recent Sticker"
                    }
                },
                new: "New",
                comingSoon: "Coming Soon",
                sending: "Sending...",
                compressing: "Compressing...",
                pendingSend: "Pending Send...",
                present: "Online",
                online: "Online",
                recently: "last seen recently",
                just_now: "last seen less than a minute ago",
                last_minutes: "last seen {minutes} minutes ago",
                last_online_at: "last seen at {time}",
                last_online_yesterday_at: "last seen yesterday at {time}",
                last_online_week_date_at: "last seen {weekday} at {day} {month}",
                last_online_date_at: "last seen at {day} {month}",
                last_hours: "last seen {hours} hours ago",
                last_days: "last seen {days} days ago",
                last_week: "last seen a week ago",
                last_month: "last seen a month ago",
                long_time: "last seen long time ago",
                typing: {
                    single_member: "{name} is {typing}",
                    many_members: "{name} and {size} more are {typing}",
                    sending_messages: "sending messages...."
                },
                background_color_test: "Background Color Test",
                bot: "Bot",
                new_message: "New Message",
                join: "Join",
                membership: "Join",
                membership_join: "Join",
                see: "See",
                open: "Open",
                unblock: "Unblock",
                mute: "MUTE",
                unmute: "UNMUTE",
                contact: "Contact",
                cancel: "Cancel",
                accept: "Accept",
                restart: "Restart",
                messages_input_placeholder: "Write a message...",
                bot_messages_input_placeholder: "message...",
                invalid_nick: "Invalid nickname.",
                no_access_to_chat: "You don't have access to this chat.",
                input: {
                    draft_error: "Draft message encountered an error.",
                    edit_long_message_error: "Message is too long to send.",
                    sendButton: {
                        scheduleTooltip: "Hold the Send button to schedule a message.",
                        scheduleTooltipDesktop: "Hold the mouse over the Send button or right-click to send a scheduled message."
                    }
                },
                microphone_notfound_alert: {
                    title: "Microphone not active",
                    description: "Enable the microphone to record audio."
                },
                recording_error: {
                    title: "Recording error",
                    description: "An issue occurred while recording audio. Check your microphone access."
                },
                i_got_it: "Got it",
                messageType: {
                    LOCATION: "Location",
                    PURCHASE_MESSAGE: "Money Request",
                    PHOTO: "Photo",
                    VOICE: "Voice Message",
                    VIDEO: "Video",
                    GIF: "GIF",
                    AUDIO: "Music",
                    DOCUMENT: "File",
                    RECEIPT: "Receipt",
                    STICKER: "Sticker",
                    ANIMATED_STICKER: "Sticker",
                    CONTACT: "Contact",
                    GIFT_PACKET: "Gift Packet",
                    GOLD_GIFT_PACKET: "Golden Gift Packet",
                    CROWDFUNDING: "Financial Crowdfunding",
                    TEXT: "Message",
                    TEMPLATE_MESSAGE: "Message",
                    TEMPLATE_MESSAGE_RESPONSE: "Message",
                    SERVICE: "Message",
                    PREMIUM: "Premium Content",
                    UNSUPPORTED: "Message",
                    DELETED: "Deleted Message",
                    ORDER: "Bill",
                    ALBUM: "Album",
                    POLL: "Poll"
                },
                contactMessage: {
                    seeProfile: "View profile",
                    addContact: "Add to contacts",
                    sendMessage: "Send message",
                    add: "Add",
                    message: "Message"
                },
                messagesError: {
                    cannot_process_audio: "An issue occurred while processing the audio. Update the app and try again."
                },
                messageMenu: {
                    delete: "Delete",
                    reply: "Reply",
                    edit: "Edit",
                    forward: "Forward",
                    view_replies: "View Replies",
                    select: "Select",
                    forwardToMe: "Saved Messages",
                    copyLink: "Copy Message Link",
                    like: "Like",
                    unlike: "Unlike",
                    copy: "Copy",
                    copy_link: "Copy Link",
                    copy_card_number: "Copy Card Number",
                    copy_transcript: "Copy Transcript",
                    copy_transcript_success: "Transcript copied.",
                    copy_voice_message: "Copy Voice Message",
                    paste: "Paste",
                    pin: "Pin",
                    unPin: "Unpin",
                    save: "Save",
                    start_call: "Start Call",
                    join_call: "Join Call",
                    add_to_gifs: "Add to GIFs",
                    share: "Share",
                    retract_vote: "Retract Vote",
                    close_poll: "Stop Poll",
                    send_now: "Send Now",
                    reschedule: "Reschedule",
                    delete_scheduled_message_title: "Delete Scheduled Message",
                    delete_scheduled_message_description: "Are you sure you want to delete this scheduled message?",
                    resend: "Resend"
                },
                supportContextMenu: {
                    copy_value: "Copy source channel Id",
                    success_copy: "Source channel Id coppied.",
                    copy_sticker_value: "Copy sticker pack Id",
                    success_sticker_copy: "Sticker pack Id coppied."
                },
                editor: {
                    bold: "Bold",
                    italic: "Italic",
                    check_box: "Check box",
                    create_link: "Create link",
                    create_link_modal: {
                        title: "Creat a link",
                        description: "Enter your link for the selected text.",
                        text_field_label: "Link",
                        text_field_placeholder: "Enter your link...",
                        confirm_text_button: "Creat a link",
                        cancel_text_button: "Cancel"
                    }
                },
                dialogMenu: {
                    mute: "Mute",
                    unmute: "Unmute",
                    marked_as_unread: "Mark as unread",
                    marked_as_read: "Mark as read",
                    archive: "Archive",
                    unarchive: "Unarchive",
                    delete: "Delete Chat",
                    delete_block_bot: "Delete and Block",
                    group_deleted: "Channel was deleted.",
                    channel_deleted: "Group was deleted.",
                    dialogs_deleted: "Conversations were deleted.",
                    dialog_deleted: "Conversation was deleted.",
                    pin: "Pin",
                    profile: "View Profile",
                    clear_history: "Clear Chat History",
                    unPin: "Unpin",
                    add_to_folder: "Add To Folder",
                    remove_from_folder: "Remove From Folder",
                    leave_group: "Leave {groupType}",
                    leave_delete_group: "Leave and Delete {groupType}",
                    delete_confirm: "Are you sure you want to delete this chat?",
                    block: "Block",
                    leave_delete_confirm: "Are you sure you want to leave and delete this chat?",
                    leave_channel_confirm: "Are you sure you want to leave this channel?",
                    delete_error: "An error occurred while deleting the chat.",
                    leave_channel_owner_warning: "You own the {groupType}, If you delete the channel, it will be deleted for all subscribers. You can avoid deleting the {groupType} for all subscribers by transferring ownership to one of your contacts.",
                    suggestedForYou: "Suggested for you",
                    no_unread_dialogs: "You have no unread dialogs."
                },
                folder: {
                    add_to_folder: "Add To Folder",
                    add_new_folder: "Add New Folder",
                    add_folder: "Add Folder"
                },
                archive: {
                    folderName: "بایگانی‌شده",
                    archiveDialogs: "Archived Chats",
                    archived: "Chat archived.",
                    archivedPlural: "Chats archived.",
                    unarchived: "Chat unarchived.",
                    unarchivedPlural: "Chats unarchived.",
                    undo: "Undo",
                    menu: {
                        minimize: "Minimize",
                        maximize: "Maximize",
                        goToProfile: "Go to Profile",
                        backToDialogs: "Back to Chats",
                        howItWorks: "How does archive work?"
                    },
                    info: {
                        title: "Archived Chats",
                        description: "Archiving allows you to hide conversations that you don't want to see on the main page without deleting them.\n If a new message is received, muted chats will remain in the archive, while unmuted chats will appear in the archived chat preview.",
                        understood: "Got it"
                    }
                },
                tabMenu: {
                    delete_folder: "Delete Folder",
                    edit_folder: "Edit Folder",
                    disable_folder: "Disable Folder"
                },
                pin: {
                    forbid_operation: "You can't pin more than {count} chats.",
                    private: {
                        remove_all_title: "Unpin messages",
                        remove_all_desc: "Are you sure you want to unpin all messages?"
                    }
                },
                userProfile: "User Profile",
                bottom_menu: {
                    dialogs: "Chats",
                    contacts: "Contacts"
                },
                messages: {
                    gift: "Gift Packet"
                },
                service: a.P.service,
                loginـs: {
                    bam_login_requested: "Bam login requested"
                },
                emojis: "Emojis",
                stcikers: "Stickers",
                member: "Member",
                emojiPanel: {
                    rtl: !0,
                    search: "Search",
                    search_no_results_1: "Oh no!",
                    search_no_results_2: "No emoji found",
                    pick: "Pick an emoji",
                    add_custom: "Add custom emoji",
                    categories: {
                        activity: "Activities",
                        custom: "Custom",
                        flags: "Flags",
                        foods: "Foods and Drinks",
                        frequent: "Frequently Used",
                        nature: "Animals and Nature",
                        objects: "Objects",
                        people: "Emojis and People",
                        places: "Places",
                        search: "Search Results",
                        symbols: "Symbols"
                    },
                    skins: {
                        choose: "Choose default skin tone",
                        1: "Default",
                        2: "Light",
                        3: "Medium-Light",
                        4: "Medium",
                        5: "Medium-Dark",
                        6: "Dark"
                    }
                },
                emoji: {
                    heart: "Heart",
                    like: "Like",
                    dislike: "Dislike",
                    laugh: "Laugh",
                    cry: "Cry",
                    perfect: "Perfect",
                    thanks: "Thanks",
                    iran: "Iran",
                    palestine: "Palestine",
                    flower: "Flower",
                    heart_eyes: "Heart Eyes",
                    proud: "Proud",
                    scared: "Scared",
                    angry: "Angry",
                    poker_face: "Poker Face",
                    mind_blowing: "Mind-Blowing",
                    celebrate: "Celebrate",
                    clap: "Clap",
                    pray: "Pray",
                    fire: "Fire",
                    check: "Check",
                    sad: "Sad",
                    black_heart: "Black Heart",
                    melting_face: "Melting face",
                    saluting: "Saluting",
                    rolling_on_the_floor_laughing: "Rolling on the floor laughing",
                    beaming_face_with_smiling_eyes: "Beaming face with smiling eyes",
                    smiling_face_with_tear: "Smiling face with tear",
                    smiling_face_with_halo: "Smiling face with halo",
                    slightly_smiling_face: "Slightly smiling face",
                    upside_down_face: "Upside down face",
                    winking_face: "Winking face",
                    smiling_face_with_hearts: "Smiling face_with hearts",
                    nerd_face: "Nerd face",
                    star_struck: "Star struck",
                    confused_face: "Confused face",
                    pleading_face: "Pleading face",
                    face_with_rolling_eyes: "Face with rolling eyes",
                    face_with_medical_mask: "Face with medical mask",
                    alien_monster: "Alien monster",
                    rasing_hands: "Rasing hands",
                    handshake: "Handshake",
                    eyes: "Eyes",
                    man_facepalming: "Man facepalming",
                    new_moon_face: "New moon face",
                    full_moon_face: "Full moon face",
                    earth: "Earth",
                    snowman: "Snowman",
                    birthday_cake: "Birthday cake",
                    trophy: "Trophy",
                    football: "Football",
                    high_voltage: "High voltage",
                    dove: "Dove",
                    party_popper: "Party popper",
                    clown_face: "Clown face",
                    hundred: "Hundred",
                    ghost: "Ghost",
                    pill: "Pill",
                    unicorn: "Unicorn",
                    broken_heart: "Broken heart",
                    heart_on_fire: "Heart on_ ire",
                    lebanon_flag: "Lebanon flag",
                    moai: "Moai"
                },
                dialogsTabs: {
                    0: "All",
                    1: "Private",
                    2: "Group",
                    3: "Channel",
                    4: "Bot",
                    callLog: "Calls",
                    10: "Unread"
                },
                forward: {
                    forward_hint: "Forward to...",
                    select_user_to_forward: "Select at least one contact to forward the message.",
                    place_holder: "Search contacts, group, channel and username...",
                    caption_placeholder: "Add a description...",
                    send_to_saved_message: "Sending message to yourself",
                    message: "Message",
                    post: "Post",
                    success: {
                        single_msg_single_peer: "{unit} forwarded to {title}.",
                        multiple_msg_single_peer: "{unit}s forwarded to {title}.",
                        single_msg_multiple_peer: "{unit} forwarded to {count} chats.",
                        multiple_msg_multiple_peer: "{unit}s forwarded to {count} chats.",
                        single_msg_to_me: "{unit} forwarded to saved messages.",
                        multiple_msg_to_me: "{unit}s forwarded to saved messages."
                    },
                    empty: {
                        no_channel: "You can only forward to channels where you are an admin or owner.",
                        no_group: "Forwarding to groups is not possible.",
                        no_bot: "Forwarding to bots is not possible.",
                        no_dialog: "There is no chat for forward."
                    }
                },
                anonymous_contact: {
                    phone_number: "Phone number",
                    reg_date: "Registration date",
                    rename_date: "Name changed",
                    photo_date: "Profile photo changed",
                    common_groups: "Shared groups",
                    group_count: "{value} groups",
                    verified: "This is an official account.",
                    not_verified: "Not an official account",
                    modal: {
                        common_groups: "Shared groups"
                    }
                },
                falake: {
                    open_unknown_link: "Open Unknown Link",
                    scam_link: "Fraudulent Link",
                    unknown_link_description: "Are you sure you want to open this link? This link leads outside of Bale and may not be secure.",
                    scam_link_description: "Access to this link is not allowed. This link has been identified as fraudulent or harmful and has been blocked for your safety.",
                    open_link: "Open Link",
                    confirm_text: "Got it",
                    open_link_description: "Are you sure you want to open this link?"
                },
                you: "You",
                internet: "Internet",
                recent_dialogs: "Recent Chats",
                report_message: {
                    report_inappropriate: "Report",
                    inappropriate: "Inappropriate Content",
                    violence: "Promotion of Violence",
                    spam: "Spam",
                    violence_content: "Content containing promotion of violence",
                    report_fraud: "Report Fraud",
                    report: "Report {type}",
                    fraud: "Scam",
                    fraud_content: "Fraudulent content",
                    nsfw: "Unethical Content",
                    incorrect_info: "False Information",
                    other: "Other",
                    send: "Send Report",
                    can_desc: "You can provide more details about your report.",
                    should_desc: "Please provide more details about your report.",
                    desc_label: "More Details",
                    desc_place_holder: "Write your report...",
                    error: "Failed to send the report.",
                    success: "Report sent successfully.",
                    report_messages: "Report Messages",
                    select_at_least_one: "Select at least one message to report."
                },
                drawer: {
                    profile: "Profile",
                    report_problem: "Report a Problem",
                    support: "Support",
                    setting: "Settings",
                    faq: "FAQ",
                    bale_guide: "Bale Guide Channel",
                    version: "Version ",
                    update: "Update",
                    save_logs: "Save Logs",
                    save_push_logs: "Save Push Logs",
                    create_group: "Create Group",
                    create_channel: "Create Channel"
                },
                drawer_setting: {
                    title: "Settings",
                    menu: {
                        notifications: "Notifications",
                        transaction_settings: "Transaction Settings",
                        auto_download: "Auto Download",
                        appearance: "Appearance Changes",
                        folders: "Folders",
                        chat: "Chat Settings",
                        privacy_security: "Privacy and Security",
                        blocked_users: "Blocked users",
                        default_tab: "Default Tab",
                        language: "Language",
                        location: "Location",
                        storage_management: "Storage Management"
                    },
                    folders: {
                        title: "Folders",
                        menu: {
                            add_folder: "Create New Folder",
                            add: "Add",
                            primary_add_dialog: "Add a conversation (Private, Group, Channel, and Bot)",
                            secondary_add_dialog: "Add a conversation",
                            folder_name: "Folder name",
                            folder_name_input_placeholder: "Enter Folder name",
                            empty_folder_name_error: "",
                            add_dialog_title: "",
                            search: "Search",
                            edit_folder: "Edit Folder",
                            delete_folder: "Delete Folder",
                            suggested_folders: "Suggested Folders",
                            your_folders: "Your Folders",
                            folder_count: "{count} Folder",
                            folders_count: "{count} Folders",
                            disabled: "Disable Folder",
                            confirmText: "Are you sure you want to delete this folder? This will remove the folder, your chats will not be deleted.",
                            add_conversation: "Add a conversation",
                            add_conversation_to: "Add a conversation to \xab{folder}\xbb",
                            dialog_count: "{count} conversation",
                            create_folder_error: "It is not possible to create more than {count} folders.",
                            private: "private",
                            create_folder_success: "The folder was created successfully.",
                            default_folder_click: "Default folder can’t not be edited.",
                            folder_dialog_error: "To create a new folder, you need to add at least one chat."
                        }
                    },
                    storage_management: {
                        media_types: {
                            photo: "Photos",
                            video: "Videos",
                            voice: "Voices",
                            file: "Files",
                            gif: "Gifs",
                            sticker: "Stickers",
                            avatar: "Avatars",
                            audio: "Songs"
                        }
                    },
                    default_tab: {
                        mainTitle: "Default Tab",
                        title: "Select default tab"
                    },
                    location: {
                        title: "Location"
                    },
                    auto_download: {
                        in_data_mode: "When using mobile data",
                        in_wifi_mode: "When connected to Wi-Fi",
                        media_types: {
                            photo: "Photo",
                            video: "Video",
                            voice: "Voice",
                            file: "File",
                            gif: "Gif"
                        }
                    },
                    chat: {
                        template: 'Your message send by pressing " {keys} "',
                        title: "Send a message by pressing:",
                        keys: {
                            Enter: "Enter",
                            CtrlEnter: "Ctrl + Enter",
                            ShiftEnter: "Shift + Enter"
                        }
                    },
                    appearance: {
                        menu: {
                            dialog_menues: "",
                            font: "",
                            background: "Setting the background of the chat"
                        },
                        background: {
                            title: "Background of the chat",
                            menu: {
                                set_background_image: "Choose a background image",
                                set_background_color: "Set the background color",
                                set_light_dark: "Day and night mode",
                                set_photo_from_gallery: "Add Photo from Gallery"
                            },
                            blur: "Fading intensity",
                            theme_light: "Day mode",
                            theme_dark: "Night mode",
                            theme_auto: "System mode"
                        },
                        dialog_tabs: {
                            dialog_tabs: "Dialog tabs",
                            unknown: "All",
                            channel: "Channel",
                            group: "Group",
                            private: "Private",
                            bot: "Bot",
                            unread: "Unread"
                        }
                    },
                    notification: {
                        chat: {
                            title: "Chat notifications",
                            privates: "Private chats",
                            groups: "Groups",
                            channels: "Channels",
                            bots: "Bots"
                        },
                        personal: {
                            title: "Notification setting",
                            mention_me: "Notification at the time of naming me",
                            message_preview: "Message preview"
                        },
                        no_access: "Access to notifications is blocked."
                    },
                    privacy_and_security: {
                        privacy: "Privacy",
                        security: "Security",
                        privacy_and_security: "Privacy and Security",
                        contacts: {
                            title: "Contacts",
                            delete_synced_contacts: {
                                title: "Delete synced contacts",
                                modal_title: "Delete contacts",
                                modal_description_mobile: 'By doing this, your "Bale" contacts will be deleted. To sync again, go to the "Contacts" tab and select "Update contacts".',
                                modal_description_desktop: 'By doing this, your "Bale" contacts will be deleted. To sync again, please use the Android app.',
                                modal_confirm_text: "Delete",
                                modal_cancel_text: "Cancel",
                                modal_error: "Something went wrong while deleting contacts. Please try again.",
                                modal_error_title: "Contacts were not deleted.",
                                modal_error_description: "Error deleting contacts. Please try again.",
                                modal_error_retry: "Retry"
                            }
                        },
                        last_seen: "Last Seen & Online",
                        last_seen_modal_title: "Who can see my last seen time?",
                        card_to_card_modal_title: "Who can do card by card for me?",
                        invite_modal_title: "Who can add me to group chats?",
                        invite: "Groups & Channels",
                        set_password: "Set password",
                        change_password: "Change Password",
                        card_to_card: "Card To Card",
                        end_sessions: "Close accounts of other devices",
                        delete_account: "Delete Account",
                        devices: "Devices",
                        nobody: "Nobody",
                        all: "Everybody",
                        close: "Close",
                        confirm: "Confirm",
                        detected_devices: "Detected Devices:",
                        active_device: "This Device",
                        other_devices: "Other Devices",
                        just_contacts: "My Contacts",
                        end_all_in_all_devices: "Close accounts on other devices",
                        are_you_sure_end_session: "Are you sure to close the user account on this device?",
                        are_you_sure_end_all_sessions: "Are you sure to close the account of other devices?",
                        end_session_error_modal: {
                            title: "Terminate Session Error",
                            title_for_all: "Terminate Sessions Error",
                            general_description: "There was a problem processing your request.",
                            forbidden_description: "For security reasons, it is temporarily not possible to terminate older session from a device you've just connected.",
                            forbidden_description_for_all: "For security reasons, it is temporarily not possible to terminate older sessions from a device you've just connected.",
                            i_got_it: "Got it"
                        },
                        delete_account_strings: {
                            delete_account_warning: "With delete your account:",
                            are_you_sure_title: "Delete Account",
                            terminate_session_modal_title: "Close the account on this device",
                            are_you_sure: "Are you sure you want to delete your account?",
                            delete_account_warning_description: 'All your information will be deleted in "Yes" and will not be returned in any way',
                            warnings: ["Delete account information and profile pictures", "Delete all text, photo, video, audio messages", "Delete all banking messages and their history", "Deleting card numbers and bank account information", "Delete contacts and contact information", "Delete channels you own"],
                            code_block_title: "Account deletion confirmation code",
                            input_label: "Confirm code",
                            resend_code: "Resend the code",
                            delete_account_button: "Delete Account",
                            time_left: "Remaining time: ",
                            time_seconds: " seconds",
                            error_modal: {
                                title: "Mobile number cannot be changed.",
                                description: "Your wallet balance is {amount} thousand Iranian Toman. To change your mobile number, first withdraw your wallet balance, then try changing your mobile number again. ",
                                description_second_paragraph: "You can use your wallet balance for recharging, internet packages, and more."
                            }
                        },
                        password_description: "By enabling the password, you must enter the desired password that you have set when opening the application. If you forget the password, you must uninstall and reinstall the program.",
                        call_settings: {
                            title: "Call",
                            description: "Who can call me?"
                        },
                        story_privacy: {
                            title: "Story",
                            description: "Who can see my story?",
                            add_exception: "Add Exception",
                            exception: {
                                title: "Enable adding exception",
                                description: "Selected users can’t see your story."
                            },
                            options: {
                                all: {
                                    title: "Everyone",
                                    description: "Everyone can see your story by visiting your profile."
                                },
                                except: {
                                    title: "All contacts except...",
                                    description: "These contacts won't see your stories."
                                },
                                contacts: {
                                    title: "Contacts",
                                    description: "Only your contacts will see your story.",
                                    description_alt: "All your contacts will see your story."
                                },
                                just: {
                                    title: "Favorite contacts",
                                    description: "Only the contacts you choose will see your story.",
                                    guide: "Who will share your story with?"
                                }
                            },
                            reply: "Reply to my story",
                            note: "Changes you make to story privacy settings won't affect the stories you've already shared.",
                            selectedCount: "{count} selected person",
                            exceptionCount: "Except for {count} selected users, others will see your story."
                        },
                        story_link: {
                            title: "Story",
                            description: "Please enter the desired link"
                        },
                        blocked_user: {
                            title: "Blocked user",
                            userType: {
                                contacts: "Contacts",
                                anonymous: "Unknown",
                                bot: "Bot"
                            },
                            unblock: "Unblock"
                        }
                    }
                },
                service_worker: {
                    update_error: "Failed to fetch the new version."
                },
                bug_report_modal: {
                    hint: "If you encounter a problem or malfunction, you can help us improve the 'Bale Web Application' by reporting it in this form.",
                    title: "Title",
                    description: "...Description",
                    date: "Approximate Issue Occurrence Time",
                    send: "Send Report",
                    done: "Error report sent"
                },
                file_size: {
                    mb: "MB",
                    kb: "KB",
                    b: "B"
                },
                description: "Description...",
                copy_done: "Message copied.",
                copy_messages_done: "Messages copied.",
                copy_link_done: "Message link copied.",
                copy_card: "Card number copied.",
                copy_link: "Link copied.",
                copy_receipt_done: "Receipt copied.",
                copy_username: "Username copied.",
                copy_phonenumber: "Phone number copied.",
                copy_group_id: "{groupType} ID copied.",
                copy_text: "Text copied.",
                forward_to_me_done: "Message saved in private.",
                maximum_selected_message: "Maximum of {count} messages can be selected.",
                maximum_selected_contacts: "Maximum of {count} contacts can be selected.",
                unsupported_message_description: "Currently, displaying this message is not supported.",
                saved_messages: "Saved Messages",
                deleted_account: "Deleted Account",
                deleted_group: "Deleted Group",
                deleted_channel: "Deleted Channel",
                user: "user",
                messages_search: {
                    title: "Message Search",
                    new_title: "Search for Message",
                    title_found_old_messages: "Results of Last Search",
                    messages_found: "{count} messages found",
                    not_found_messages: "No results found",
                    search_in: "Search for {query} in {name}",
                    message_has_been_deleted: "This message has been deleted",
                    message_has_been_deleted2: "This message has been deleted!",
                    result_list: "result list",
                    result_number_from: "{from} from {total} results",
                    total_result_count: "{total} results",
                    result_count: "search result count",
                    chat: "return to chat",
                    result: "{total} results",
                    empty_state_text: "Searching message in {name}",
                    search: "Search",
                    date: "Date",
                    before: "Before",
                    message_double_dates_selected: "Selecting two dates at once isn't possible.",
                    message_double_user_selected: "Selecting two users at once isn't possible.",
                    search_ran_into_problem: "Search ran into a problem.",
                    date_picker_title: "Select Date"
                },
                sidebar_search: {
                    tab_all: "All",
                    tab_channel: "Channels",
                    tab_bot: "Bots",
                    message_scope_all: "All Messages",
                    message_scope_private: "Private Messages",
                    message_scope_channel: "Channels",
                    message_scope_group: "Groups",
                    no_results: "No results found.",
                    placeholder: "Search...",
                    flowPlaceholder: "Search contents",
                    global: "Global Search",
                    globalSearch: {
                        globalGroups: "Global Search Groups",
                        globalChannels: "Global Search Channels",
                        globalBots: "Global Search Bots",
                        globalUsers: "Global Search Users",
                        globalPeers: "Global Search Chats"
                    },
                    dialogs: "Dialogs",
                    recentPeer: "Recent Searches",
                    messages: "Messages",
                    dialogs_contacts: "Chats and Contacts",
                    channels: "Channels",
                    bots: "Bots",
                    my_channels: "My Channels",
                    suggested_channels: "Suggested Channels",
                    suggested_bots: "Suggested Bots",
                    show_less: "Show less",
                    show_more: "Show more",
                    deleteRecentModal: {
                        title: "Delete",
                        titleAll: "Delete all",
                        description: "Are you sure you want to delete this from recent searches?",
                        descriptionAll: "Are you sure you want to delete all recent searches?"
                    },
                    topPeerModal: {
                        title: "Remove",
                        description: "Are you sure you want to remove \xab{title}\xbb from suggestions?"
                    },
                    GroupRecommendations: {
                        description: 'You can register your group for public introduction on "Bale".',
                        button: "Group registration",
                        title: "Recommended groups"
                    }
                },
                flow_search: {
                    member: "member",
                    channel: "channel",
                    content: "content",
                    see_all_result: "show all results",
                    deleteRecentModal: {
                        title: "delete",
                        titleAll: "delete all",
                        description: "Are you sure you want to delete this from recent searches?",
                        descriptionAll: "Are you sure you want to delete all recent searches?"
                    },
                    tooltip: {
                        text: "search for content, images & channels"
                    }
                },
                editted: "Edited",
                baje_profile: {
                    defaultName: "Dear User",
                    welcome: "Welcome to Baje",
                    complete_profile: "Please complete your profile.",
                    new_request: "Submit a New Question",
                    archived_requests: "List of Reviewed Questions",
                    close: "Close"
                },
                chat: {
                    inputbar: {
                        not_mebmer: "Not a member"
                    }
                },
                peer_toolbar: {
                    clear_history: "Clear Messages",
                    statistics: "Statistics",
                    leave: "Leave",
                    leave_delete: "Leave and Delete Channel",
                    clear_history_confirm: "Are you sure you want to delete chat messages?",
                    add_contact: "Add to Contacts",
                    block: "Block",
                    block_report: "Block and Report",
                    do_you_know_user: "Do you know \xab{name}\xbb?",
                    unknownPeer: {
                        user: {
                            info: "Do you know \xab{name}\xbb?",
                            confirm_btn: "Add to Contacts",
                            reject_btn: "Block",
                            report_reject_btn: "Block and Report",
                            block_modal: {
                                title: "Block",
                                description: "Are you sure you want to block \xab{name}\xbb?",
                                checkbox: "Report User"
                            }
                        },
                        group: {
                            info: 'You have been invited to the {type} by "{name}", "{name}" is not one of your contacts.',
                            info_channel: "You have been invited to the channel by someone who is not in your contacts.",
                            confirm_btn: "Accept invite",
                            reject_btn: "Leave {type}",
                            report_reject_btn: "Leave and Report",
                            block_modal: {
                                title: "Leave {type}",
                                description: "Are you sure to leave and delete the {type}?",
                                checkbox: "Report {type}"
                            }
                        },
                        bot: {
                            info: "If you don’t want to receive messages from “{name}”, you can block it.",
                            confirm_btn: "Got it",
                            reject_btn: "Block bot",
                            block_modal: {
                                title: "Block",
                                description: "Are you sure you want to block “{name}”?",
                                checkbox: "Send a report for inappropriate content from the bot",
                                cancel: "Cancel"
                            }
                        }
                    },
                    report_private_success: "Report sent successfully.",
                    report_group_success: "Report sent successfully and the group  deleted.",
                    block_modal: {
                        title: "Block",
                        description: "Are you sure you want to block \xab{name}\xbb?",
                        checkbox: "Report User",
                        confirm: "Block"
                    }
                },
                fale_hafez: {
                    title: "Hafez Fortune",
                    confirm: "Get a Fortune",
                    cancel: "Not now",
                    description: "Get a fortune for '{name}'. ",
                    caption: "Receive good fortune! \uD83D\uDE0A"
                },
                profile: {
                    user: {
                        details: {
                            phone: "Phone Number",
                            userName: "Username",
                            bio: "About Me",
                            nick_placeholder: "Enter your username",
                            bio_placeholder: "Write about yourself"
                        },
                        menu: {
                            editName: "Edit Contact Name",
                            block: "Block Contact",
                            delete: "Delete Contact",
                            unBlock: "Unblock Contact",
                            addContact: "Add to Contacts"
                        },
                        editName: {
                            name: "Name"
                        },
                        blockModal: {
                            title: "Block Contact",
                            desc: "Are you sure you want to block this contact?",
                            confirm: "Block User"
                        },
                        unBlock: {
                            title: "Unblock Contact",
                            desc: "Are you sure you want to unblock this contact?",
                            confirm: "Unblock"
                        },
                        deleteContact: {
                            title: "Delete Contact",
                            desc: "Are you sure you want to delete this contact?",
                            confirm: "Delete Contact"
                        },
                        errors: {
                            invalid_name: "Your chosen name is not accepted"
                        },
                        phone_number_context_menu: {
                            copy_phone_number: "Copy phone number",
                            change_phone_number: "Change phone number"
                        }
                    },
                    bot: {
                        details: {
                            phone: "Phone Number",
                            userName: "Username",
                            bio: "Description"
                        },
                        menu: {
                            block: "Stop and Delete Bot",
                            editName: "Edit Name",
                            delete: "Delete",
                            unBlock: "Unblock",
                            addContact: "Add to Contacts",
                            termsAndConditions: "Bot Terms and Conditions"
                        },
                        blockModal: {
                            block: "Block",
                            desc_with_username: "Are you sure you want to block \xab{username}\xbb?",
                            desc_without_username: "Are you sure you want to block this bot?",
                            delete_chat: "Delete Chat"
                        },
                        editName: {
                            name: "Name"
                        },
                        unBlock: {
                            title: "Unblock Bot",
                            desc: "Are you sure you want to unblock this bot?",
                            confirm: "Unblock"
                        },
                        deleteContact: {
                            title: "Delete",
                            desc: "Are you sure you want to delete this bot?",
                            confirm: "Delete"
                        },
                        addGroupButton: {
                            description: "By adding this bot, you can manage your group and channel.",
                            textButton: "Add bot to group and channel",
                            modalTitle: "Select dialog",
                            myGroups: "My groups",
                            myChannels: "My channels",
                            groups: "Groups",
                            toastText: 'A "management" bot was added to the group.'
                        }
                    },
                    group: {
                        type: "Group",
                        desc: "Description",
                        members: "Group Members",
                        userName: "{groupType} ID",
                        add_new_user: {
                            title: "Add New Member",
                            small_title: "Add",
                            add_via_link: "Invite to the {type} via link",
                            search_placeholder: "Search for a new member..."
                        },
                        suspended: "{type} has been temporarily suspended due to user reports.",
                        suspended_alert: "Group is no longer accessible",
                        suspended_desc: "Group '{name}' has been temporarily suspended based on user reports and investigations.",
                        suspended_reason: "Due to the publication of ",
                        suspended_desc_deleted: " has been deactivated.",
                        choose_owner: "choose owner",
                        delete_after_transfer_ownership: 'Ownership transferred to "{name}" now you can leave the group.',
                        search_admin: "Search admin...",
                        leave_peer_group: "Leave {groupType}",
                        set_user_permissions: {
                            title: "Set Member Permissions",
                            header1: "Member Permissions",
                            header2: "Member's Permission",
                            label1: "What actions can group members perform?",
                            label2: "Exception",
                            label3: "What actions can this member perform?",
                            send_message: "Send messages",
                            send_multimedia: "Send multimedia messages",
                            send_media: "Send media",
                            send_gif_sticker: "Send GIFs and stickers",
                            send_stickers: "Send stickers",
                            pin_message: "Pin messages",
                            edit_group_info: "Edit group information",
                            edit_channel_info: "Edit channel information",
                            edit_channel_message: "Edit messages of others",
                            delete_channel_message: "Delete messages of others",
                            delete_group_message: "Delete group messages",
                            add_story: "Add a story",
                            delete_message: "Delete message",
                            edit_permissions: "Edit permissions",
                            see_permissions: "View permissions",
                            add_member: "Add member",
                            add_admin: "Add new admin",
                            see_members: "View members",
                            kick_user: "Remove member",
                            start_call: "Start Call",
                            manage_call: "Manage Calls",
                            add_exception: "Add exception",
                            confirm_text: "Save changes",
                            success: "Changes successfully applied.",
                            confirmation: "You have made changes on this page, are you sure you want to save them?",
                            add_admin_success: "'{username}' is now an admin.",
                            set_permissions: "Set permissions",
                            search: "Search...",
                            back: "Back",
                            exit: "Exit",
                            remove_exception: "Remove from exception list",
                            your_permissions: "Your permissions",
                            change_own_permissions_not_allowed: "A manager cannot edit their own permissions.",
                            more_than_default_not_possible: 'This permission is disabled for all group members. You can enable this permission from the "Member Permission Settings" section of the group.',
                            admin: {
                                choose_admin: "Choose new admin",
                                add_admin: "Add admin",
                                header: "Admin permission",
                                permission: "What actions can this admin perform?",
                                error: "You do not have this permission."
                            },
                            errors: {
                                general: "An error occurred in setting permissions.",
                                not_allowed_in_public_group: "Setting this permission is not allowed in public groups.",
                                making_admin: "An error occurred in making the user an admin."
                            },
                            exception_description: "Lack of {permissions} permission"
                        },
                        menu: {
                            reaction_management: "Reaction Settings",
                            edit: "Edit Group Profile",
                            link: "Group Link",
                            leave: "Leave Group",
                            remove: "Delete and Leave Group",
                            kick: "Remove from Group",
                            makeAdmin: "Promote to Admin",
                            removeAdmin: "Demote from Admin",
                            removeAdminNew: "Remove from {type} Admins",
                            transferOwner: "Transfer Ownership"
                        },
                        warn_excepted_admin: {
                            body: "By selecting this user as administrator, it will be removed from the exception list.",
                            confirm: "Confirm and continue",
                            cancel: "Cancel"
                        },
                        link: {
                            title: "Group Link",
                            desc: "People can join your group using this link, and you can invalidate the link at any time.",
                            new_link: "Create a new link and invalidate the previous one",
                            depricate_link: "Invalidate the link",
                            copy_done: "Group link copied.",
                            depricate_sure: "Are you sure you want to invalidate the link?"
                        },
                        tabs: {
                            members: "Members",
                            pics: "Pictures",
                            videos: "Videos",
                            docs: "Files",
                            voices: "Voice",
                            music: "Music",
                            links: "Links",
                            groups: "Shared groups"
                        },
                        leaveGroup: {
                            title: "Leave Group",
                            desc: "Are you sure you want to leave the group?",
                            confirm: "Leave"
                        },
                        removeGroup: {
                            title: "Leave and delete group",
                            desc: "Are you sure you want to delete and leave the group?",
                            confirm: "Delete"
                        },
                        edit_profile: {
                            group_name: "Group Name",
                            about_placeholder: "Write something about the group...",
                            description: "Description"
                        },
                        edit_group: "Edit Group",
                        group_setting: "Group Settings",
                        group_type: {
                            title: "Group Type",
                            private: "Private Group",
                            public: "Public Group",
                            invite_link: "Invite Link",
                            private_desc: "You can enter private groups by invitation or having a link.",
                            public_desc: "The public groups are accessible from the search section, and anyone can be added to them.",
                            link_desc: "People can join your group using this link."
                        },
                        channel_type: {
                            title: "Channel Type",
                            private: "Private Channel",
                            public: "Public Channel",
                            invite_link: "Invite Link",
                            private_desc: "You can enter private channels by invitation or having a link.",
                            public_desc: "Public channels are displayed in search results, and the chat history is accessible to everyone. Anyone can join these channels.",
                            link_desc: "People can join your channel using this link.",
                            add_new_user: {
                                title: "Add New Member",
                                small_title: "Add",
                                add_via_link: "Invite to the channel via link",
                                search_placeholder: "Search for a new member..."
                            }
                        },
                        admins: {
                            title: "Admins",
                            admins_list: "Admins List",
                            add_new_admin: "Add New Admin",
                            added_by_you: "Added by you to the admins.",
                            added: "Added to the admins.",
                            by: "By",
                            owner: "Owner",
                            manager: "Manager",
                            promoted_by: "Added to admins by {name}",
                            makeAdmin: {
                                title: "Promote to Admin",
                                message: "Are you sure you want to promote {name} to admin?"
                            }
                        },
                        users: {
                            title: "Members",
                            add_new_user: "Add New Member",
                            no_member: "No members were found.",
                            search_member: "Search Member",
                            show_message_from: "Show Message From",
                            invite_using_link: "Invite to the group via link",
                            owner: "Owner",
                            admin: "Admin",
                            kick: {
                                title: "Remove from {type}",
                                message: "Are you sure you want to remove '{name}' from {type}?"
                            }
                        },
                        errors: {
                            make_user_owner_error: 'It is not possible to transfer ownership of the {groupType} to "{name}" because of reaching the maximum limit',
                            create_group_error: "It is not possible to create a {groupType} because of reaching the allowed ceiling."
                        },
                        changeGroupTypeToastText: 'The group "{groupName}" has been converted to a {groupType} group.',
                        groupType: {
                            public: "public",
                            private: "private"
                        },
                        bot: {
                            can_see_messages: "Has access to messages",
                            cannot_see_messages: "Has no access to messages"
                        }
                    },
                    channel: {
                        type: "Channel",
                        userName: "Channel ID",
                        suspended_alert: "Channel is no longer accessible",
                        menu: {
                            transfer_owner: "Transfer Ownership",
                            transfer_owner_confirm: "Are you sure you want to transfer {type} ownership to '{username}'?",
                            transfer_owner_toast: "Ownership transfer request for '{username}' has been sent. After this user confirms, ownership of the {groupType} '{groupName}' will be transferred.",
                            leave: "Leave Channel",
                            remove: "Leave and Delete Channel",
                            edit: "Edit Channel Profile",
                            kick: "Remove from Channel"
                        },
                        changeChannelTypeToastText: 'The channel "{groupName}" has been converted to a {groupType} channel.',
                        channel_type: {
                            title: "Channel Type",
                            private: "Private Channel",
                            public: "Public Channel"
                        },
                        join_channel: "Join Channel",
                        edit_channel: "Edit Channel",
                        channel_setting: "Channel Settings",
                        leaveChannel: {
                            title: "Leave Channel",
                            desc: "Are you sure you want to leave the channel?",
                            confirm: "Leave"
                        },
                        edit_profile: {
                            title: "Edit Channel Profile",
                            channel_name: "Channel Name",
                            about_placeholder: "Write about the channel..."
                        },
                        invite_using_link: "Invite to Channel via Link",
                        kickUser: {
                            confirmMessage: ""
                        },
                        make_admin_confirm_message: "",
                        block_access_to_private_channel: "This is a private channel, access is not possible."
                    },
                    my: {
                        menu: {
                            editName: "Edit Name",
                            exit: "Log Out",
                            addNewAvatar: "Add New Photo"
                        },
                        editNick: {
                            title: "Edit Username",
                            inputLabel: "Username",
                            invalid: "Invalid username",
                            exist: "This username has already been chosen",
                            helpText: `You can choose a username so that people can find you without needing your phone number.

        The username must be at least 5 characters long with lowercase letters and numbers. You can use an underscore between characters.`
                        },
                        editAbout: {
                            title: "Edit About Me",
                            inputLabel: "About Me",
                            helpText: "You can write a few lines about yourself. Anyone who views your profile will see this text."
                        },
                        chooseAvatar: {
                            methods: {
                                takePhoto: "Take Photo",
                                fromGallery: "Choose from Gallery"
                            }
                        },
                        cropAvatarModal: {
                            title: "Crop Photo"
                        },
                        leaveMultiple: {
                            title: "Delete {n} chats",
                            desc: "Are you sure you want to delete these chats?",
                            confirm: "Delete"
                        }
                    },
                    avatar: {
                        addPhoto: "Set New Photo",
                        removePhoto: "Remove Photo",
                        delete_profile: "Delete Profile Photo",
                        delete_profile_confirm: "Are you sure you want to delete the profile photo?",
                        changed_avatar: "You changed the {groupType} avatar",
                        updaload_avatar_failed: "There was a problem during uploading avatar"
                    },
                    notifications: "Notifications",
                    uploadingPhoto: "Uploading Photo..."
                },
                order_message: {
                    water: "Water",
                    electricity: "Electricity",
                    gas: "Gas",
                    tel: "Telephone",
                    mobile: "Mobile",
                    city: "Municipality Fees",
                    tax: "Tax",
                    penalty: "Penalty",
                    general: "Bill",
                    id: "ID"
                },
                update: {
                    newVersion: "New Version",
                    changeLog: "New Version Changes",
                    new_changeLog_version: "Changes in Version {version}",
                    changeLog_version: "Changes in Version {version}",
                    enter: "Enter New Version",
                    update: "Update",
                    update_bale: "Update 'Bale'",
                    some_bugs_have_been_fixed: "Some reported issues have been fixed"
                },
                share: "Share",
                save: "Save",
                nav: {
                    profile: "Profile",
                    chats: "Chat",
                    story: "Story",
                    contacts: "Contacts",
                    flow: "Flow",
                    magazine: "Magazine",
                    ai: "AI",
                    myBank: "My Bank",
                    service: "Services",
                    allServices: "All Services",
                    serviceBots: "Bots"
                },
                messageBar: {
                    edit: "Edit Message",
                    forwardFromOne: "Forwarded from {name}",
                    forwardFromMultiple: "Forwarded from multiple people",
                    forwardedMessageCount: "{count} forwarded messages"
                },
                deactivated: {
                    title: "This Page is Deactivated",
                    desc: 'You have opened another page of the "Bale Web Application". To prevent potential issues, we have deactivated this page.',
                    activate: "Activate this Page"
                },
                status: {
                    Offline: "No Internet Connection",
                    isConnecting: "Connecting...",
                    isSyncing: "Updating...",
                    retry: "Check your internet connection and try again."
                },
                purchaseMessages: {
                    desiredAmountHeader: "Enter the desired amount for {name}:",
                    desiredAmountLabel: "Amount (IRR)",
                    desiredAmount: "Desired Amount",
                    enterDesiredAmount: "Enter desired amount",
                    desiredAmountPlaceholder: "Enter the desired amount"
                },
                save_to_gallery: "Save to Gallery",
                download: "Download",
                from: "From",
                copy_image: "Copy Image",
                pay: "Pay",
                withdraw: "Withdraw",
                pay_with_wallet: "Pay with Wallet",
                mybank: {
                    new_bank_services: "New Financial Services",
                    bank_services: "Banking Services",
                    other_services: "Other Services",
                    popular_services: "Popular Services",
                    recomended: "Recommended",
                    title: "My Bank",
                    ramzinex: "Ramzinex",
                    halalFund: "Halal Fund",
                    darato: "Darato",
                    nobatgir: "National Queue",
                    arz: "Travel Currency",
                    arzInquiry: "Currency Inquiry",
                    branchId: "Branch id",
                    officeId: "Office id",
                    branchFull: "Branch capacity is full for today",
                    stateFull: "State capacity is full for today",
                    about: "To get started, choose one of the services",
                    sefteh: "Electronic Promissory Note",
                    baleMyBankTitle: "Bale Banking Services",
                    charge: "Top-Up",
                    internetPackage: "Internet Package",
                    cardToCard: "Card to Card",
                    balance: "Card Balance",
                    bill: "Bill Payment",
                    maskan: "Housing Facilities",
                    statement: "Account Statement",
                    baje: "Baje",
                    charity: "Charity",
                    transactions: "Transactions",
                    housing: "Housing Facilities",
                    pfm: "Financial Management",
                    sapta: "National Bank Information",
                    club: "Bale Club",
                    kindnessCircle: "Kindness Circle",
                    bankdari: "Banking 7/24",
                    add: "Add",
                    recommend: {
                        title: "Why do you see these recommendations?",
                        description: 'Bale intends to offer a more diverse range of services on the "My Bank" page through collaboration with other businesses. If you have any suggestions or feedback, please contact us via the following communication channel:',
                        support: "Bale Support: supportbot@",
                        close: "Understood"
                    }
                },
                yara: {
                    activateTransactionReceiving: "Activate Transaction Receiving",
                    transactionSettings: "Transaction Settings"
                },
                charge_type: {
                    direct: "Direct Top-Up",
                    code: "Top-Up Code"
                },
                rial: "Rial",
                toman: "Toman",
                dolar: "Dollar",
                mili_gram: "میلی گرم",
                gram: "gram",
                moadel: "Equivalent",
                more_all: "See All",
                delete: "Delete",
                delete_all: "Delete All",
                select_all: "Select All",
                enseraf: "Cancel",
                yes: "Yes",
                no: "No",
                case: "Case",
                repurchase: "Repurchase",
                transaction_receipt: "Transaction Receipt",
                transaction_type: "Transaction Type",
                date_and_time: "Date and Time",
                desired_amount: "Desired Amount",
                charge_kind: {
                    normal: "Regular Top-Up",
                    amazing: "Amazing Top-Up"
                },
                see_all: "See All",
                operators: {
                    irancell: {
                        name: "Irancell"
                    },
                    hamrah: {
                        name: "Hamrah-e-Aval"
                    },
                    rightel: {
                        name: "Rightel"
                    },
                    td_lte: {
                        name: "TD-LTE"
                    }
                },
                receipt: {
                    charge_code: "Top-Up Code",
                    charge_code_copy_text: "Top-Up code copied"
                },
                wrong_phonenumber: "Incorrect mobile number entered.",
                phonenumber_is_required: "Mobile number is required.",
                phonenumber_is_not_complete: "Please enter the complete mobile number.",
                phonenumber_start_with_09_9: "Mobile number must start with 09 or 9.",
                select_from_contacts: "Select from Contacts",
                delete_orders: {
                    title: "Delete {type}",
                    single: "Are you sure you want to delete {type}?",
                    multiple: "Are you sure you want to delete all {type}?",
                    charge: "Top-Ups",
                    internet: "Internet Packages",
                    type_charge_single: "Top-Up",
                    type_charge_multiple: "Top-Ups",
                    type_internet_single: "Internet Package",
                    type_internet_multiple: "Internet Packages"
                },
                attachment: {
                    title: "Choose...",
                    types: {
                        file: "File",
                        media: "Photo and Video",
                        location: "Location",
                        poll: "Poll",
                        gift_pocket: "Gift Pocket",
                        gold_gift_pocket: "Golden Gift Pocket",
                        send_crowdfunding: "Create Crowdfunding Campaign",
                        send_request_money: "Money Request",
                        card_to_card: "Card to Card",
                        crowdfunding: "Financial Crowdfunding"
                    },
                    modals: {
                        photo: "Send Photo",
                        video: "Send Video",
                        gif: "Send GIF",
                        location: "Send Location",
                        photo_video: "Send Photo and Video",
                        file: "Send File",
                        add_photo: "Add Photo",
                        add_media: "Add Photo and Video",
                        send_album: "Send as Album",
                        send_as_file: "Send as File",
                        send_none_album: "Send as Non-Album",
                        crop_image: "Crop Image",
                        see_preview: "See Preview",
                        selected_number: "{count} Selected",
                        send_poll: "Send Poll"
                    },
                    labelVideo: "Description for this Video",
                    labelPhoto: "Description for this Photo",
                    labelDoc: "File Description",
                    labelGeneral: "Description",
                    desc: "Write your description...",
                    send_video_with_original_quality: "Send Video with Original Quality",
                    send_as_a_gif: "Send as GIF",
                    error_compress_video: "Error compressing the video.",
                    error_gif_limit_exceeded: "Cannot send a GIF larger than 65 MB.",
                    error_compression_not_supported: "Video compression is not supported in your browser.",
                    error_send_file_failed: "Failed to send file. Please try again.",
                    error_file_size_exceeded: "File size exceeds the allowed limit.",
                    error_send_multi_media_failed: "Failed to send album message. Please try again."
                },
                notificationMessages: {
                    askPermissionTitle: "Notification Access Permission",
                    iosVersionNotSupported: "To receive notification messages, please update your iOS version to 16.4.",
                    permission: {
                        default: 'Select "Allow" to receive new message notifications.',
                        denied: {
                            firefox_desktop: ["To receive notifications, select the ", ' button, choose "Settings" from the "Permission" section, and enable "Notification" for web.bale.ai.'],
                            firefox_mobile: ["To receive notifications, select the ", ' button and enable "Notification."'],
                            chrome_desktop: ["To receive notifications, select the ", ' button and enable "Notification."'],
                            chrome_mobile: ["To receive notifications, select the ", ' button, and enable "Notification" from the "Permission" section.'],
                            safari_desktop: 'To receive notifications, select "Settings", choose "Safari", and enable "Notification" for web.bale.ai.',
                            safari_mobile: 'To receive notifications, select "Settings", choose web.bale.ai, and enable "Notification".'
                        }
                    },
                    enableNotification: "Enable Message Notifications",
                    allowText: 'Select "Allow" to receive new message notifications.',
                    doItLater: "Activate Later"
                },
                locationMessages: {
                    permission: {
                        title: "Permission to access location",
                        confirmText: "I'll enable it later.",
                        denied: {
                            title: "Enable location",
                            description: "To see your exact location on the map, you need to turn on your location."
                        },
                        android: {
                            desc: "To send location to contacts, grant location access.",
                            cancleText: "Not now"
                        },
                        bot: {
                            title: "Enable location",
                            desc: "Enable location to see your exact location on the map.",
                            confirmText: "Enable"
                        }
                    },
                    buttonText: {
                        confirm: "Send Location"
                    },
                    error: "An error occurred while loading the location image."
                },
                pollMessages: {
                    title_label: "Question",
                    title_placeholder: "Ask a question",
                    options: "Options (up to {length})",
                    option_label: "Option",
                    anonymous: "Anonymous poll",
                    multiple_choice: "Select multiple options",
                    write_question: "Ask a question",
                    poll_settings: "Poll settings",
                    max_length: "Maximum question length is {length} characters.",
                    empty_option_error: "Poll option cannot be empty.",
                    empty_question_error: "Poll question cannot be empty.",
                    minumum_poll_options_limit: "You need at least 2 options to create a poll.",
                    add_new_option: "Add new option",
                    error_send_message: "Error sending message",
                    delete_poll: "Delete poll",
                    delete_poll_text: "Are you sure you want to delete the poll?",
                    maximum_options_error: "You can add a maximum of 12 options."
                },
                poll_bubble: {
                    multi_choice_info: "You can select multiple options.",
                    final_result: "Final result",
                    vote: "({vote} vote)",
                    poll: "Poll",
                    anonymous_poll: "Anonymous poll",
                    show_result: "View results",
                    send: "Send",
                    stop_poll_title: "Stop Poll",
                    stop_poll_body: "After stopping the poll, voting will no longer be possible; also, you cannot revert this poll.",
                    stop_poll: "Stop",
                    stop_poll_error: "Error stopping the poll",
                    vote_poll_error: "An error occurred while voting",
                    tooltip_text: "{vote} vote",
                    poll_result: "Poll result",
                    participant: "{number} participant",
                    poll_question: "Poll question",
                    vote_info: "{vote} vote ({percentage}%)",
                    other_people: "{count} other people"
                },
                schedule_message: {
                    title: "Schedule Message",
                    schedule: "Schedule",
                    send_format: "{day} - {time}",
                    confirm_format: "Send, {day} - {time}",
                    success: "Message scheduled.",
                    error: "Error scheduling message!",
                    reschedule_success: "Message rescheduled successfully.",
                    reschedule_error: "Error rescheduling message!",
                    edit_success: "Message edited successfully.",
                    sticker_success: "Sticker scheduled.",
                    sticker_error: "Error scheduling sticker!",
                    gif_success: "GIF scheduled.",
                    gif_error: "Error scheduling GIF!",
                    voice_success: "Voice message scheduled.",
                    voice_error: "Error scheduling voice message!",
                    poll_success: "Poll scheduled.",
                    poll_error: "Error scheduling poll!",
                    long_message_error: "It isn't possible to schedule long messages!"
                },
                eventBar: {
                    text: "Vote for the Web Version of Bale",
                    link: "Click here"
                },
                survey: {
                    title: "Submit Feedback",
                    cancel: "Cancel",
                    howIsPerformance: "How is the performance of the Bale web application?",
                    inputPlaceHolder: "Writing optional comments...",
                    successfullySended: `Your feedback has been successfully submitted; we appreciate your time. 🌻`,
                    options: {
                        s1: {
                            text: "Very Bad",
                            question: "What was very bad?"
                        },
                        s2: {
                            text: "Bad",
                            question: "What was bad?"
                        },
                        s3: {
                            text: "Average",
                            question: "What needs improvement?"
                        },
                        s4: {
                            text: "Good",
                            question: "What makes it excellent?"
                        },
                        s5: {
                            text: "Excellent"
                        }
                    },
                    sorry: "We're sorry for the experience you had.",
                    success: "Your feedback has been successfully submitted.",
                    call: {
                        howIsCallQuality: 'How do you rate "Bale" call quality?',
                        whatIsYourISP: "Which internet service provider do you use?",
                        ISPs: {
                            hamrahAval: "Hamrah Aval",
                            iranCell: "Irancell",
                            rightel: "Rightel",
                            tci: "Telecommunications Company of Iran",
                            homemade: "Homemade"
                        }
                    }
                },
                pinned_message: "Pinned message",
                multiple_pinned_message: "Pinned messages",
                counting_unit: "number{plural}",
                been_pinned_message: "The message has been pinned.",
                pin_message: "Pin a message",
                want_pin_message: "Do you want to pin this message?",
                send_notif_to_all_members: "Send notification to all members",
                pin_for_current_peer: "Pin for {name} too.",
                removed_pinned_message: "The message pin has been removed.",
                remove_pin_message: {
                    title: "Delete a pinned message{plural}",
                    description: "Do you want to delete the pinned message{plural} for all members?"
                },
                plural: "s",
                second: "Second",
                seconds: "Seconds",
                tabEmptyMessages: {
                    Members: "No one has joined this group yet",
                    Pictures: "No pictures available",
                    Videos: "No videos available",
                    Documents: "No files available",
                    Voices: "No voice messages available",
                    Musics: "No music messages available",
                    Links: "There is no link",
                    MutualGroups: "No shared groups available."
                },
                selectedMedia: {
                    Members: "",
                    Pictures: "Selected Picture",
                    Videos: "Selected Video",
                    Documents: "Selected File",
                    Voices: "Selected Voice",
                    Musics: "Selected Music",
                    Links: "Selected Link"
                },
                sapta_empty_state: {
                    pfm_welcome: "Welcome to the Bank Melli Iran Transactions Service.",
                    first_transaction_desc: "Receive a transaction receipt by making the first transaction from your Bank Melli Iran account.",
                    initializingTip: "Due to the initial synchronization, transactions will be available to you within a maximum of 24 hours.",
                    services_title: "Features of this service:",
                    services: ["Receive receipts of Bank Melli Iran transactions", "Personal financial management", "Categorize each transaction", "Display graphical and textual reports"]
                },
                arzEmptyStates: "",
                arzEmptyBranches: "",
                buyInternetReceipt: {
                    receiptTemplateText: `
        <html>
          <span><b>Internet Package Purchase</b></span><br/>
          <span>Internet package purchase was successful.</span><br/>
          <span>Title: </span><span>{title}</span><br/>
          <span>Operator: </span><span>{operator}</span><br/>
          <span>Mobile Number: </span><span>{phonenumber}</span><br/>
          <span>Package Amount: </span><span>{amount} Rial</span><br/>
          <span>Tracking Code: </span><span>{code}</span><br/>
          <span>Date: </span><span><date>{date}</date></span><br/>
          <span>#Purchase #Successful #InternetPackagePurchase</span><br/>
        </html>
      `
                },
                buyChargeReceipt: {
                    directChargeHashtag: "#direct_charge",
                    codeChargeHashtag: "#code",
                    receiptTemplateText: `
        <html>
          <span><b>Internet Package Purchase</b></span><br/>
          <span>Internet package purchase was successful.</span><br/>
          <span>Title: </span><span>{title}</span><br/>
          <span>Operator: </span><span>{operator}</span><br/>
          <span>Mobile Number: </span><span>{phonenumber}</span><br/>
          <span>Package Amount: </span><span>{amount} Rial</span><br/>
          <span>Tracking Code: </span><span>{code}</span><br/>
          <span>Date: </span><span><date>{date}</date></span><br/>
          <span>#Purchase #Successful #InternetPackagePurchase</span><br/>
        </html>
      `
                },
                buyChargeTitle: "Top-Up Purchase",
                buyChargeFailedInfo: "Contact information for the requested user was not found.",
                buyInternetTitle: "Purchase Internet Package",
                pfm: {
                    title: "Personal Financial Management",
                    topup: "Top-Up",
                    withdraw: "Withdraw",
                    showBalance: "Show Balance",
                    emptyState: {
                        desc: "Personal financial management is a tool for managing the income and expenses of each individual through the Bank Melli Iran account.",
                        services_title: "Features of this service:",
                        services: ["Display graphical and textual reports", "Categorize each transaction", "View income and expenses for a specific period"],
                        show_details: "Activation Procedure",
                        activation_title: "To activate this service, you need the following:",
                        activation_steps: ["Having a Bank Melli Iran account", "Activating Bank Melli Iran SMS by visiting Bank Melli Iran branches", "Receiving transaction message in the 'Bank Melli Iran Transactions' service"]
                    },
                    analysis: {
                        report: "Analytical Report",
                        watch: "View Report",
                        month: "Month",
                        description: "Exclusive analysis of deposits and withdrawals in"
                    },
                    tabs: {
                        titles: {
                            chart_report: "Graphical Financial Report",
                            text_report: "Textual Financial Report"
                        },
                        choose_default_tab: "Choose the default tab",
                        account: {
                            number: "Account Number",
                            balance: "Balance"
                        },
                        dateFilter: "Select Time Range"
                    },
                    date_picker: {
                        apply_filter: "Apply Filter",
                        today: "Today",
                        last_30_days: "Last 30 Days",
                        this_month: "This Month",
                        this_week: "This Week",
                        custom_date: "Select Custom Time Range",
                        title: "Select Time Range",
                        fromDate: "From Date",
                        dueDate: "To Date",
                        errors: {
                            startAfterToday: "The start date should not be after today.",
                            endAfterToday: "The end date of the time range should not be after today.",
                            endBeforeStart: "The end date should not be before the start date."
                        }
                    },
                    report_details: {
                        report_details: "Report Details",
                        withdrawTitle: "Withdrawal Report Details",
                        popupTitle: "Deposit Report Details",
                        total_amount: "Total Amount",
                        unlabeled: "Uncategorized",
                        addUserTag: "Add Custom Category",
                        addUserTagsLimmitReport: "You can create a maximum of 5 custom {title}.",
                        noStickerSelected: "You haven't selected a label for this category.",
                        betterToTag: "By categorizing transactions as 'Uncategorized,' you can receive more detailed information."
                    },
                    tags_filter: {
                        filter: "Filter",
                        filterTypes: {
                            all: "All",
                            withdraw: "Withdrawal",
                            top_up: "Top-Up"
                        },
                        title: "Textual Financial Report Filter",
                        operators: {
                            title: "Select Transaction Type"
                        },
                        categories: {
                            top_up: "Top-Up Category",
                            withdraw: "Withdrawal Category"
                        },
                        search_bar: {
                            placeholder: "Search for a category"
                        },
                        buttons: {
                            withFilter: "Apply Filter",
                            withoutFilter: "Remove All Filters"
                        },
                        empty: "No matching category found.",
                        noTranscationFound: "No transactions found based on your selected filter."
                    },
                    doughnutChart: {
                        footerText: "View {type} details",
                        footerText2: "Categorize",
                        labelsPlaceholder: "No transactions found in your selected time range.",
                        income: "Deposit",
                        outcome: "Withdrawal",
                        unknown: "Uncategorized"
                    },
                    barChart: {
                        headerText: "Deposit and Withdrawal Chart",
                        thirtyDaysHeaderText: "Deposit and Withdrawal Chart (Last 30 Days)",
                        moneySign: "IRR",
                        income: "Deposit",
                        outcome: "Withdrawal"
                    },
                    customTag: {
                        title: "Add Custom {title}",
                        confirm_text: "Add",
                        exist_error: "This {title} already exists",
                        input: {
                            title: "{title} Name",
                            placeholder: "Enter {title} Name"
                        },
                        editMode: {
                            title: "Edit Custom {title}",
                            confirm_text: "Edit"
                        }
                    },
                    transactionOptions: {
                        add_desc: "Add Description",
                        remove_desc: "Remove Description",
                        edit_desc: "Edit Description",
                        desc: "Description",
                        desc_start: "Description: ",
                        add: "Add",
                        desc_placeholder: "Enter Description",
                        del: "Delete Transaction",
                        delete_transaction: "Delete",
                        delete_msg: "By deleting the transaction, it cannot be restored. Are you sure you want to delete the transaction?"
                    },
                    calculate: {
                        tipTitle: "How Deposit and Withdrawal are Calculated",
                        descriptions1: "Deposit and withdrawal amounts are updated based on the messages received from Bank Melli's notification arm. Due to network disruptions, some of these transactions may not be received in this arm, and the amounts of these transactions are not calculated in the deposit and withdrawal.",
                        description2: "If you encounter this issue, you can report it through the 'Error Report'."
                    },
                    transaction_type: {
                        0: "",
                        1: "Deposit",
                        2: "Withdrawal"
                    },
                    choose_category: "Categorize",
                    tags: {
                        withdraw: {
                            2: "Food and Groceries",
                            3: "Transportation",
                            4: "Internet and Recharge",
                            5: "Bill",
                            6: "Car Expenses",
                            7: "Beauty and Health",
                            8: "Healthcare",
                            9: "Housing and Rent",
                            10: "Installments and Debts",
                            11: "Home Supplies",
                            12: "Entertainment",
                            13: "Clothing and Personal Items",
                            14: "Education",
                            15: "Charity and Religious Funds",
                            16: "Gifts and Celebrations",
                            17: "Travel",
                            18: "Investment",
                            19: "Lending to Others",
                            31: "Miscellaneous",
                            33: "Person to Person",
                            35: "Digital Goods",
                            36: "Sports"
                        },
                        topup: {
                            20: "Salary",
                            21: "Subsidies and Justice Shares",
                            22: "Interest",
                            23: "Rent and Lease",
                            24: "Pocket Money",
                            25: "Debt and Loan Collection",
                            26: "Loan and Borrowing",
                            27: "Asset Sale",
                            28: "Gift and Celebration",
                            29: "Reward and Work Celebration",
                            30: "Compensation",
                            32: "Miscellaneous",
                            34: "Person to Person"
                        }
                    },
                    reportError: {
                        title: "Error Report",
                        requestReport: "Submit Error Report",
                        placeholder: "For example: I did not receive the deposit transaction receipt",
                        description: "Due to network disruptions, some transactions may not be recorded, and the displayed deposit and withdrawal amounts may be incorrect. If you encounter this issue, you can report it to the support unit through the text box below.",
                        defaultProblems: ["I did not receive the deposit transaction receipt", "I did not receive the withdrawal transaction receipt"]
                    },
                    select_tag: {
                        title: "Categorize",
                        placeholder: "Search for a category",
                        editTitle: "Edit Category",
                        search: "Search for a category",
                        sticker: "Sticker",
                        tag: "Category",
                        secondLayer: {
                            title: "Assign a Sticker",
                            editTitle: "Edit Sticker",
                            placeholder: "Search for a sticker",
                            description: "Choosing a sticker is optional. You can either choose a sticker or confirm the '{title}' category.",
                            addSticker: "Add Custom Sticker",
                            accept: "Final Confirmation",
                            tipDescription: "Choosing a sticker can make the categorization of transactions more accurate; also, in the graphical report tab, you can have more details about deposits and withdrawals.",
                            deleteDescription: "Upon deletion, all transactions with this sticker will be moved to the 'Uncategorized' section."
                        }
                    },
                    cofirmDelete: {
                        title: "Are you sure you want to delete {title}?",
                        description: "Upon deletion, all transactions categorized under this category will be moved to the 'Uncategorized' section.",
                        delete: "Delete {title}",
                        cancel: "Cancel"
                    }
                },
                months: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                cart_number: "Card Number",
                myCards: {
                    cardsList: {
                        title: "My Cards",
                        add_cart: "Add New Card",
                        default: "Default",
                        cancel_default_card: "Cancel Default Card",
                        default_card: "Default Card",
                        authorized_card: "Authorized",
                        reactivation_needed: "Reactivation Needed",
                        delete_card: "Delete Card",
                        noCards: {
                            title: " No Cards Registered Yet",
                            description: "Registering a bank card is required for receiving or transferring money."
                        }
                    },
                    shaparak_hub: {
                        enroll_modal_title: "Registering Card in Shaparak System",
                        hub_is_down: "Currently unable to connect to the Shaparak system; please try again in a few minutes.",
                        hub_erorr: "Encountered an error in the Shaparak system process. Please try again.",
                        enroll: "Register Card",
                        enroll_failed: "Failed to register the card in the Shaparak system.",
                        cardInfo_failed: "Failed to register the card information in the system.",
                        enroll_success: "Your card has been successfully registered in the Shaparak system.",
                        update: "Update",
                        try_again: "Try Again",
                        card_number: "Card Number",
                        enroll_in_hub: "Register Card in Shaparak System",
                        enroll_message: "According to the new regulations of the Central Bank, it is necessary to register your '{bank_name}' card once in the Shaparak system. By doing this, the card-to-card limit will also increase to 5 million Tomans. For ease of card registration, you can copy your card number from the section below.",
                        reactivate_message: "According to the rules, if you log out of your user account, log in again, delete and reinstall the application, clear the application memory, or use a new device, you need to re-register one of your cards in the Shaparak system to call other registered cards.",
                        update_message: "For card-to-card transactions, you need to update the 'Bale' application to have access to the bank card identity verification process.",
                        errors: {
                            otp: "Due to network disruption, please try again in a few minutes.",
                            others: "Due to a technical problem, the process encountered an error; please try again in a few minutes.",
                            offline: "Access encountered an error; please try again.",
                            expired_card_title: "Re-verification of Identity",
                            expired_card: "The expiration date of your Mellat Bank card has changed. To continue the process, it is necessary to re-verify the identity in the Shaparak hub system.",
                            enroll_title: "Re-verification of Identity",
                            enroll: "The process encountered an error. Please re-perform the identity verification process.",
                            shaparak_down: "Currently unable to connect to the Shaparak system; please try again in a few minutes.",
                            failed: "The process encountered an error. Please try again.",
                            hub: "The process encountered an error in the Shaparak system. Please try again.",
                            error_500: "Due to a technical problem, the process encountered an error; please try again in a few minutes.",
                            error_400: "The process encountered an error; please try again.",
                            unknown: "Due to a technical problem, the process encountered an error; please try again in a few minutes."
                        }
                    },
                    addCard: {
                        title: "Add Bank Card",
                        save_card: "Save Card",
                        cardTitle: "Card Title",
                        cardTitlePlaceholder: "For example: Savings Account",
                        saveAsDefaultCard: "Save as Default Card",
                        defaultCardDescription: "Amounts sent by others will be deposited into your default card."
                    }
                },
                wallet: {
                    melli_bank_wallet: "Melli Bank Wallet",
                    error: "Due to technical issues, the wallet balance has not been updated.",
                    updating: "Updating...",
                    wallet_balance: "Wallet Balance",
                    more_menu: {
                        increase_balance: "Increase Balance",
                        cashout: "Cashout from Wallet",
                        wallet_history: "Wallet Account Transactions"
                    },
                    more_menu_gold: {
                        buy_gold: "Buy gold",
                        sell_gold: "Sell gold",
                        transaction_history: "Transaction history",
                        gold_trade: "Trade Gold"
                    }
                },
                gift_pocket: {
                    send_gift_button: "send gift",
                    gift_pocket: "Gift Pocket",
                    person: "Person",
                    open_gift: {
                        status_text: {
                            finished: "Gift pocket finished.",
                            timed_out: "Gift pocket timed out.",
                            gift_received: "You received your gift.",
                            all_packets_opened: "All gift pockets opened."
                        },
                        bubble_text: {
                            late: "You're late\nHope you win next time! \uD83D\uDE0D",
                            won: "You are the first winner! \uD83D\uDE0D"
                        },
                        unopened_count: "Unopened Pockets Count",
                        opened_count: "Opened Pockets Count",
                        receivers: "Receivers",
                        not_opened: "Not Opened: ",
                        your_gift_colon: "Your Gift: ",
                        your_gift: "Your Gift",
                        gift_amount_colon: "Gift Pocket Amount: ",
                        gift_amount: "Gift Pocket Amount",
                        gift_added_to_wallet: "Gift pocket amount added to your Melli Wallet.",
                        no_gift_opened: "No pocket opened yet."
                    },
                    message: {
                        from: "From",
                        open: "Open Pocket",
                        see_details: "See Details"
                    },
                    send_gift: {
                        modals: {
                            guide: {
                                title: "Number of Gift Pocket Recipients",
                                content: "The number of gift pocket recipients determines the number of people who can open the pocket. Each member can only open the pocket once. The maximum number of pockets is determined based on the number of members and the amount set for the pocket. Naturally, if the number of gift pocket recipients is less, the excitement of opening the pocket will be higher."
                            },
                            success: {
                                title: "Gift pocket sent successfully.",
                                content: "The receipt is sent to the transaction arm."
                            },
                            error: {
                                title: "Payment not processed.",
                                content: "Please try again."
                            }
                        },
                        errors: {
                            should_enter_pocket_message: "Entering pocket message is required",
                            should_enter_pocket_number: "Entering pocket number is required",
                            should_enter_amount: "Entering amount is required",
                            minimum_pocket_amount: "Amount less than {amount} thousand Tomans is not possible",
                            maximum_pocket_amount: "Amount more than {amount} thousand Tomans is not possible"
                        },
                        placeholders: {
                            amount: "10,000",
                            pocket_number: "For example: 20",
                            pocket_message: "For example: Happy Eid"
                        },
                        title: "Send Gift Pocket",
                        suggestions: "Suggested Messages:",
                        equal_division: "Equal Division",
                        equal: "Equal",
                        random_division: "Random Division",
                        random: "Random",
                        distribution_help: "The total amount is divided {type} among individuals.",
                        send_to: "Send to",
                        pocket_amount: "Pocket Amount",
                        gift_pocket_amount: "Gift Pocket Amount",
                        pocket_message: "Gift Pocket Message",
                        pocket_receivers: "Gift Pocket Recipients",
                        use_wallet_credit: "Use Wallet Credit",
                        wallet_credit: "Wallet Credit",
                        not_updated: "Not Updated",
                        payable_amount: "Payable Amount",
                        pocket_number_help: "Based on the pocket amount, a maximum of {count} people can open the pocket.",
                        defaultExamples: "Hit the drum cheerfully \uD83C\uDF89 \uD83C\uDFC5 & Sweets \uD83E\uDDC1\uD83C\uDF69  & I love you ❤️ & Happy Birthday \uD83C\uDF82\uD83E\uDD73 & The leaf is a gift for the poor \uD83C\uDF31",
                        show_amount: "Show Gift Pocket Amount to Recipients"
                    }
                },
                gold_gift_packet: {
                    gold_gift_packet: "Gold gift packet",
                    person: "Person",
                    open_gift: {
                        status_text: {
                            finished_sender: "The gift is over.",
                            finished_reciever: "The golden gift packet is finished.",
                            timed_out_reciever: "The golden gift packet has expired.",
                            timed_out_sender: "Gift expired.",
                            gift_received: "You received your gift.",
                            all_packets_opened: "All the packet were opened."
                        },
                        bubble_text: {
                            late: "You're late\nI hope you win next time. \uD83D\uDE0D",
                            won: "You were the first \uD83D\uDE0D"
                        },
                        unopened_count: "Number of unopened packets",
                        opened_count: "Number of opened packets",
                        receivers: "Recipients",
                        not_opened: "Unopened: ",
                        your_gift_colon: "Your gift: ",
                        your_gift: "Your gift",
                        gift_amount_colon: "Packet amount: ",
                        gift_amount: "Packet amount",
                        gift_added_to_wallet: "The gift packet amount has been deposited into your gold wallet.",
                        remaining_will_added: "The remaining packets will be deposited into your gold wallet.",
                        no_gift_opened: "The packet has not been opened yet.",
                        error: "There was a problem opening the gift packet. Please open the packet again."
                    },
                    message: {
                        from: "From",
                        open: "Open the packet",
                        see_details: "View details"
                    }
                },
                cardPosition: {
                    source: "Source",
                    destination: "Destination"
                },
                validateCardErrors: {
                    generalInvalidCardNumber: "Invalid card number entered.",
                    invalidSourceCardNumber: "Invalid source card number entered!",
                    invalidDestinationCardNumber: "Invalid destination card number entered!",
                    invalidCardNumber: "Invalid {source} card number entered!",
                    destinationCanNotBeSameAsSource: "Destination card cannot be the same as the source card.",
                    notCompleteCardNumber: "Please enter the complete {source} card number.",
                    requiredCardNumber: "Entering {source} card number is required.",
                    minimumAmount: "Bank {source} does not support amounts less than {amount} rials.",
                    maximumAmount: "Bank {source} does not support amounts greater than {amount} rials.",
                    amountIsRequired: "Entering amount is required.",
                    sourceBankDisabled: "Card to card is not available from this source."
                },
                cardToCard: {
                    sourceCardNumber: "Source Card Number",
                    EnterCards: {
                        title: "Card to Card",
                        sourceCard: "Source Card",
                        destinationCard: "Destination Card",
                        amount: "Amount",
                        help_text: "Amount cannot be less than {amount} Toman.",
                        description: "Description",
                        optional: "Optional",
                        sourceBanks: "Supported Source Banks",
                        soonOtherBankWillAdd: "Soon, other banks will also be added to this service."
                    },
                    requestMoney: {
                        receiverMoney: "Receiver's Money",
                        amount: "Amount:"
                    },
                    errors: {
                        paymentFailed: "Payment failed",
                        failedTryAgainLater: "An error occurred, please try again later.",
                        dateIsExpired: "The entered date has expired."
                    },
                    ConfirmAndPay: {
                        title: "Card to Card",
                        storeCard: "Store destination card for future transactions",
                        destinationCard: "Destination Card:",
                        cardOwner: "Card Owner:",
                        amount: "Amount:",
                        infoSourceCard: "Source Card Information",
                        sourceCard: "Source Card",
                        month: "Month",
                        year: "Year",
                        cvv2: "CVV2",
                        otp: "Dynamic OTP",
                        receiveOtp: "Receive OTP",
                        otpHelp: {
                            title: "Dynamic OTP Usage Guide",
                            content: `Based on the guidelines of your card-issuing bank, activate the dynamic OTP. After activation, you can receive the OTP in one of the following ways:
         <br>
         1. Receive through the bank's mobile app, internet banking, or mobile banking
         <br>
         2. Receive through the bank's USSD code
         <br>
         3. Receive by pressing the "Receive Dynamic OTP" button on this page
         <br>
         4. If you use methods like OTP generator apps, you don't need to press the Dynamic OTP button, and you can enter the code in this section.`
                        },
                        otpHelpText: "Static OTP usage is not possible. Please receive the dynamic OTP from other applications or by pressing the blue button."
                    },
                    receipt: {
                        title: "Card to Card Receipt",
                        successFullMessage: "Card to Card transaction was successful.",
                        transferAmount: "Transferred Amount",
                        sourceCard: "Source Card",
                        destinationCard: "Destination Card",
                        destinationCardHolder: "Card Holder",
                        payment_info: "Payment Information",
                        code: "Tracking Code",
                        description: "Description"
                    },
                    photoReceipt: {
                        transferMoney: "Money Transfer",
                        successMessage: "Card to Card transaction was successful",
                        amount: "Amount:",
                        sourceCard: ":Source Card",
                        destCard: ":Destination Card",
                        destCardHolder: ":Destination Card Holder",
                        traceNumber: ":Tracking Number",
                        date: ":Transfer Date",
                        hashtags: "Card_to_Card #Transfer #Successful#",
                        url: "https://bale.ai/dl :Download from",
                        errorGenerateReceipt: "There was a problem generating the receipt."
                    }
                },
                selectDestinationCard: "Select Destination Card",
                selectSourceCard: "Select Source Card",
                selectBankCard: "Select Bank Card",
                savedCards: "Saved Cards",
                baleContacts: "Bale Contacts",
                bank: "Bank",
                defaultCard: "Default Card",
                no_result: "No results found!",
                otpPrefix: "OTP ",
                otpPrefix2: "OTP:",
                receiptCardToCardMessage: `
    <html>
      <span><b>Money Transfer</b></span><br/>
      <span>Card to Card transaction was successful.<br/>Transferred Amount: </span>
      <span><font color='#e6455c'>{amount} rials</font></span><br/>
      <span>Source Card: </span><span>{sourceCard}</span><br/>
      <span>Destination Card: </span><span>{destCard}</span><br/>
      <span>Destination Card Holder: </span><span>{destName}</span><br/>
      <span>Tracking Number: </span><span>{traceNumber}</span><br/>
      <span>Transfer Date: </span>
      <span><date>{date}</date></span><br/>
      <span>#Card_to_Card #Transfer #Successful</span>
    </html>
  `,
                group_permissions: {
                    content_type: {
                        gif_sticker: "Sticker and GIF",
                        multimedia: "Multimedia",
                        message: "Message",
                        gifs: "GIFs",
                        stickers: "Stickers",
                        this: "this {place}"
                    },
                    for_you: "for you",
                    can_not_send_type_in_where: "Permission to send {type} in {where} is closed.",
                    can_not_send_type_in_where_for_you: "Permission to send {type} in {where} is closed for you.",
                    can_not_forward_message_title: "Unable to Forward Message",
                    can_not_forward_type_in_groups: "Permission to send and forward {contentType} in {groups} is closed.",
                    can_not_forward_type_in_groups_for_you: "Permission to send and forward {contentType} in {groups} is closed for you.",
                    can_not_forward_general_in_groups: "Your message contains content that is not allowed to be sent or forwarded in {groups}."
                },
                request: {
                    sendPhone: {
                        title: "Send Mobile Number",
                        description: "This bot needs access to your phone number. Are you sharing your phone number? (This may be useful for synchronization with other services.)"
                    },
                    sendLocation: {
                        title: "Share Location",
                        description: "This bot needs access to your location. Are you sharing your location?"
                    }
                },
                crowdFunding: {
                    badge: {
                        remainingTime: "Remaining Time: {time}",
                        remainingDays: "{days} Left",
                        remainingLabel: "Days Left",
                        expired: "Expired",
                        done: "Completed",
                        stopped: "Stopped"
                    },
                    from: "From {amount} rials",
                    tamin: "Funded",
                    complete_text: "{amount} rials funded and given to the creator.",
                    button: {
                        involve: "Participate in Fundraising",
                        details: "View Details"
                    },
                    create: {
                        warning: "Received amounts will be automatically transferred to your wallet.",
                        title: "Financial Crowdfunding",
                        destCard: "Destination Card",
                        campaign_title: "Campaign Title",
                        desc: "Description",
                        sliceAmount: "Amount per Share",
                        duration: "Campaign Duration",
                        choose: "Choose",
                        create: "Create Campaign",
                        desc_placeholder: "For example: Contribute to charity work with us",
                        title_placeholder: "For example: Collecting donations for Ramadan month",
                        amount: "Campaign Amount",
                        factor: "Rials {amount}",
                        amount_placeholder: "60,000",
                        errors: {
                            minimum_amount: "Amount cannot be less than one thousand tomans.",
                            empty_input: "Fill in all fields."
                        }
                    },
                    openModal: {
                        title: "Financial Crowdfunding",
                        description: "Description",
                        perSlice: "Per Share:",
                        finalAmount: "Final Amount:"
                    },
                    days_remaining: "{count} days"
                },
                days_remaining: "{count} days",
                more: "More",
                less: "Less",
                share_receipt: "Share Receipt",
                copy_receipt: "Copy Receipt",
                invite_friends: "Invite Friends",
                entry: {
                    searchingForMessage: "Searching for message...",
                    searchingForPeer: "Searching for conversation...",
                    entrySearchingError: "Search encountered an error."
                },
                openDialogError: "An error occurred while opening the conversation.",
                loadVideoError: "Displaying the video encountered an error.",
                unsupportedVideo: "This video is not supported in the browser.",
                not_allowed_video_error: "Video playback was blocked by your browser or device. Please allow playback to continue.",
                sticker_pack: {
                    add_sticker: "Add Sticker",
                    add_to_sticker_pack: "Add to Stickers",
                    remove_from_sticker_pack: "Remove from Stickers",
                    no_name_sticker_pack: "Sticker Pack",
                    remove_pack: "Remove from Stickers",
                    addMessage: "Added to Stickers",
                    removedMessage: "This sticker pack has been removed",
                    recentStickers: "Recent Stickers",
                    errors: {
                        add_sticker: "Adding sticker encountered an error.",
                        remove_sticker: "Removing sticker encountered an error.",
                        sticker_not_found: "Sticker pack not found.",
                        sticker_packs_limit_exceed: "Your sticker capacity is full."
                    }
                },
                gif: {
                    gif: "GIF",
                    add_gif_success: "Added to GIFs.",
                    remove_gif_success: "This GIF has been removed from GIFs.",
                    add_gif_limit_exceeded_error: "The capacity to add GIFs is full.",
                    add_gif: "Add GIF",
                    menu: {
                        send_gif: "Send GIF",
                        schedule_gif: "Schedule GIF",
                        delete_gif: "Delete from GIFs"
                    },
                    gif_panel_tooltip: "View new GIFs\uD83D\uDC47"
                },
                picker: {
                    emoji: "Emoji",
                    sticker: "Sticker",
                    gif: "GIF",
                    gif_picker_title: "GIFs"
                },
                walletPayment: {
                    use_wallet_credit: "Use Wallet Credit",
                    wallet_credit: "Wallet Credit: {amount} rials",
                    updating: "Updating...",
                    payableAmount: "Payable Amount:"
                },
                cancelRecordingConfirm: {
                    description: "You are currently recording a voice message. Changing the conversation will cancel and delete the voice message; Are you sure you want to cancel and delete the voice message?",
                    remove: "Delete Voice Message"
                },
                requestMoneyDetail: {
                    see_details: "View Details",
                    payable: "Payable Amount",
                    desired: "Desired",
                    payment_list: "Payment List",
                    payed_amount: "Paid Amount:",
                    payment_date: "Payment Date:",
                    payment_code: "Receipt Tracking Number:"
                },
                sendRequestMoney: {
                    title: "Request Money",
                    destinationCard: "Destination Card",
                    amount: "Amount",
                    desiredAmount: "Variable Amount (Payer's responsibility to set)",
                    messageDetails: "Message Details",
                    messageText: "Message Text",
                    messageTextPlaceholder: "Request money details...",
                    defaultImageError: "There was a problem loading the default image."
                },
                account_number: "Account Number",
                uploadImage: "Upload Image",
                userDefaultCardError: "The specified user has not registered a card to receive money.",
                userFaildGetCard: "There was a problem getting the user's card number.",
                cardBalance: {
                    title: "Card Balance",
                    supportOnlyMeli: "Currently, this service is only available for Mellat Bank cards in Iran.",
                    cardNumber: "Card Number",
                    supportError: "Currently, retrieving the balance from {bank} is not possible.",
                    remainError: "An error occurred while retrieving the card balance.",
                    balance: "Balance: {amount} Rials",
                    operationBank: "Operating Bank:",
                    currentBalance: "Current Balance:",
                    availableBalance: "Available Balance:"
                },
                cardStatement: {
                    title: "Statement",
                    listTransactionTitle: "Last 10 transactions in your account",
                    amount: "Amount:",
                    date: "Date:",
                    transactionType: "Transaction Type:",
                    statementError: "An error occurred while retrieving the statement."
                },
                installIOS: {
                    title: "نسخهٔ iOS اپلیکیشن \xabبله\xbb",
                    bodyTitle: "تغییراتی که تجربهٔ شما را بهتر می‌کند:",
                    benefits: ["دریافت اعلان پیام‌ها با کیفیت بهتر", "همگام‌سازی و دسترسی راحت‌تر به مخاطبین", "دسترسی به پیام‌ها بدون اتصال به اینترنت", "ارسال و ذخیرهٔ رسانه‌ها با عملکرد بهتر"],
                    download_appstore: "دانلود از اپ‌استور",
                    download_sibapp: "دانلود از سیب‌اپ",
                    download_sibche: "دانلود از سیبچه",
                    download_appstar: "دانلود از اپ‌استار"
                },
                cashout: {
                    equal: "Equal",
                    withdrawal_amount: "Withdrawal Amount",
                    commission: "Commission",
                    amount_errors: {
                        max: "The maximum allowable amount for wallet withdrawal is {amount} Toman.",
                        min: "The minimum allowable amount for wallet withdrawal is 10,000 Toman.",
                        notEnough: "The entered amount exceeds your wallet balance."
                    },
                    no_commission: "Currently, withdrawing from Mellat Bank wallet is commission-free.",
                    no_commission_for_balance: "Currently, registering bank information through balance deduction is done with 450 rial commission and only possible for Mellat Bank account holders.",
                    cashout_commission: "Withdrawal from Wallet Commission",
                    submit_bank_info_success_modal: {
                        title: "Your bank information has been successfully registered.",
                        content: "You can now transfer your wallet balance to your bank account."
                    },
                    enter_amount: "Select Amount",
                    cashout_to: "Deposit to Account",
                    error_modal: {
                        title: "Wallet withdrawal was not successful"
                    },
                    upgrade_wallet_error: "An error occurred while upgrading the wallet level.",
                    receipt: {
                        page_title: "Wallet Withdrawal Receipt",
                        title: "Wallet withdrawal was successful.",
                        amount: "Deposited Amount",
                        account_number: "Destination Account Number",
                        info: "Payment Information",
                        ref_number: "Tracking Code"
                    }
                },
                charge_wallet: {
                    title: "Increase Balance",
                    choose_amount: "Select Amount",
                    desired_amount: "Desired Amount",
                    help_text: "Increasing the balance less than 1,000 Toman is not possible.",
                    amount_errors: {
                        min: "The amount cannot be less than 1,000 Toman.",
                        max: "The amount cannot exceed {amount} Rials."
                    },
                    wallet_usage: {
                        title: "What can you do with your balance?",
                        send_gift: "Send 'Gift Pockets' to your friends.",
                        buy_things: "Buy charge and internet packages."
                    },
                    error_modal: {
                        title: "Increasing the wallet balance was not successful"
                    },
                    cutOffModal: {
                        title: "Increase Wallet Balance",
                        content: "Due to banking network operations at the end of the day, increasing the wallet balance will be possible from 12:05 AM."
                    }
                },
                wallet_history: {
                    title: "Wallet Account Transactions",
                    empty_state: "You haven't made any transactions with your wallet yet.",
                    transaction_type: {
                        balance: "Balance",
                        increase_inventory: "Increase Balance",
                        inquire_name_holder: "Name Holder Inquiry",
                        profile: "Profile",
                        bills: "Bills",
                        transfer_kif_to_kif: "Kif to Kif Transfer",
                        transaction_inquiry: "Transaction Inquiry",
                        edit_profile: "Edit Profile",
                        inventory_reduction: "Inventory Reduction",
                        wallet_status_change: "Wallet Status Change",
                        withdrawal_permission: "Withdrawal Permission",
                        buy_permiumcontent: "Buy Premium Content",
                        send_gift_pocket: "Send Gift Pockets",
                        recive_gift_pocket: "Receive Gift Pockets",
                        buy_charge: "Buy Charge",
                        withdrawal: "Cash Withdrawal",
                        billpayment: "Bill Payment",
                        buyecharge: "Buy E-charge",
                        buye: "Buy",
                        refund: "Purchase Refund",
                        deposit: "Cash Deposit",
                        deposit_permission: "Cash Deposit Permission",
                        authentication: "Authentication",
                        issue: "Issue",
                        charge_permission: "Charge Increase Permission",
                        share_buy: "Shared Purchase",
                        issue_cashe_account: "Cash Account Definition"
                    }
                },
                submit_bank_info_modal: {
                    title: "Register Banking Information",
                    content: "According to the Central Bank guidelines, it is necessary to register your banking information via account deduction for wallet withdrawal."
                },
                trialVersion: "Trial Version",
                somethingWentWrong: "Something went wrong.",
                voice: {
                    swipe_left: "Swipe left to cancel",
                    stop: "Stop",
                    tooltip: "Hold to record, release to send",
                    tooltip_touch_start: "Tap to record",
                    preparing: "Preparing",
                    modals: {
                        stopRecording: {
                            title: "Delete Voice Message",
                            description: "Are you sure you want to stop recording and delete the voice message?",
                            confirm: "Delete Voice Message",
                            cancel: "Cancel"
                        },
                        failed: "Unable to Send Voice Message",
                        failedToSend: "Due to technical issues, your voice message was not sent.",
                        iosVersionError: "To send a voice message, update your iOS version.",
                        lowVoiceDuration: "It is not possible to send a voice message under 1 second.",
                        permissionDenied: "There has been a problem with recording audio. Please check your microphone access.",
                        unabledToSend: "Due to technical issues, sending voice messages is not possible."
                    },
                    voiceErrors: {
                        zeroTime: "Audio time issue",
                        not_allowed_error: "Microphone access was denied. Please enable permission to continue.",
                        not_found_error: "No microphone detected. Please check that your microphone is connected.",
                        not_readable_error: "Unable to access the microphone. It might be in use by another application.",
                        overconstrained_error: "The requested microphone was not found or does not meet the current constraints.",
                        security_error: "Access to the microphone is blocked for security reasons. Please use HTTPS."
                    }
                },
                time: {
                    hour: "Hour",
                    hours: "Hours",
                    minute: "Minute",
                    minutes: "Minutes",
                    day: "Day",
                    days: "Days",
                    before: "Before",
                    ago: "ago",
                    now: "Now",
                    some_time: "Some time",
                    today: "Today",
                    yesterday: "Yesterday",
                    tomorrow: "Tomorrow"
                },
                download_warn: {
                    confirm: "Download",
                    cancel: "Cancel",
                    title: "Download {ext} File",
                    description: "Before downloading the {ext} file, make sure it is from a reliable source. If the file is invalid, your device and personal data may be at risk. You are responsible for any harm to the device or data loss that may occur as a result of downloading this file."
                },
                mention: {
                    userDoesNotExists: "No user exists with this username.",
                    unknownError: "Error opening the user account."
                },
                not_supported: "This feature is not supported in this browser.",
                qr_purchase: {
                    scan_qr: "Scan QR Code",
                    enter_amount: "Enter Order Amount",
                    amount: "Order Amount",
                    min_error: "The minimum purchase amount is one thousand Tomans.",
                    pay_to: "Pay to",
                    dest_token: "Destination Wallet ID",
                    book_credit: "Book Credit",
                    use_book_credit: "Use Book Credit",
                    successful_payment: "Payment successful",
                    expire_date: "Expiration: 30 Ordibehesht (until the end of the exhibition)",
                    your_credit: "Your book credit: {amount} Rials"
                },
                avatar_more_menu: {
                    show_profile: "Show Profile Picture",
                    show_story: "Show Story"
                },
                stream: {
                    arbaeenTooltipe: "View the status of Arbaeen, stories, and engaging content from here.",
                    tooltip: "See stories and magazine from here",
                    tabs: {
                        channel: "Channel",
                        myChannels: "My Channels",
                        channelsPost: "Channel Content",
                        feed: "Magazine",
                        post: "content",
                        image: "image"
                    },
                    search: {
                        result: "Search Results",
                        recent: "Recent Searches",
                        deleteAll: "Delete All",
                        popular: "Popular Searches"
                    },
                    arbaeen: {
                        topBarTitle: "Arbaeen Status Announcement",
                        title: "Yes Arbaeen Status System",
                        description: "Free and without the need for the internet",
                        guide: "User Guide",
                        text: {
                            title: "Announcing and Viewing Status:",
                            description: "The use of the 'Yes Arbaeen Status System' is not possible for web and iOS users.\n\nIf you are an iOS user, you can dial *500*6002# on your mobile phone to announce your status or view the status of others.\n\nIf you are a web user and have an Android phone, you can install the 'Yes' app to use the 'Arbaeen Status System'. [Download the Yes app](https://redirect.appmetrica.yandex.com/serve/893069297511908504)"
                        }
                    },
                    magazine: {
                        touchToSeeAttractiveContent: "Touch to see interesting and diverse content."
                    },
                    magazineJoinToast: "You have joined the '{channel}' channel.",
                    upvote: {
                        recommend_for_magazine: 'Upvote For "Magazine"',
                        cancel_recommend_for_magazine: 'Cancel Upvote For "Magazine"',
                        first_upvote_modal_description: `The magazine is a place to display the most popular posts of users. You can upvote your favorite post to be published in the next day's magazine.

You can upvote only {count} posts per day for the magazine.`,
                        maximum_upvote_modal_description: `You have reached the daily limit of {count} choices for "Magazine".
Come back for more post picks for tomorrow's magazine. Your name will be displayed in the list of upvoters.`,
                        toast_join_for_upvote: "By joining to the channel, you can upvote posts for the magazine.",
                        toast_join_for_revoke: "You can cancel upvote post by joining to the channel.",
                        toast_maximum_for_upvote: 'You have reached the daily limit of {count} upvote for "Magazine".',
                        toast_success_upvote_message: 'This post was a candidate for publication in "Magazine".',
                        toast_success_upvote_message_first: 'This post was a candidate for publication in "Magazine". Your name will be displayed in the list of upvoters.',
                        toast_success_revoke_message: '"Upvote for magazine" canceled.'
                    }
                },
                feed: {
                    more: "...more",
                    all: "All",
                    video: {
                        more_content: "More Content",
                        replay: "Play Again"
                    },
                    upvotes: {
                        upvoters: "Upvoters",
                        upvoter: "Upvoter",
                        upvoterCount: "Upvoter",
                        upvotersCount: "Upvoters",
                        counts: "{count} persons",
                        tooltipOther: 'User suggested post for "Magazine"',
                        tooltipMe: 'Your suggested post for "Magazine"',
                        guide: "You can upvote your favorite posts through channels for the magazine."
                    },
                    reactionLongTouchGuide: "Hold the Like icon <br>to select more reactions.",
                    channelDisableReaction: "",
                    contextMenu: {
                        join: "Join to Channel",
                        see: "See Channel",
                        forward: "Forward",
                        savedMessage: "Saved messages",
                        copy: "Copy text",
                        download: "Download",
                        report: "Report"
                    },
                    toasts: {
                        refresh_feed_failed: "The Magazine was not refreshed.",
                        connection_failed: "No Internet Connection"
                    },
                    swipeAnimation: {
                        header: "Swipe up the page.",
                        desc: "Swipe up to see more content."
                    },
                    channelForward: {
                        forwardActions: {
                            copyLink: "Copy Link",
                            share: "Share",
                            addStory: "Add to Story"
                        },
                        forwardSelectMaxNumber: "It is not possible to select more than 50 chats.",
                        sharingTitle: "Magazine"
                    }
                },
                vitrine: {
                    title: "Vitrine",
                    see: "View",
                    seeChannel: "View Channel",
                    seeGroup: "View Group",
                    joinChannel: "Join",
                    startBot: "Start Bot",
                    startChat: "Start Chat",
                    memberCount: "{count} Members",
                    openLink: "Go to Website"
                },
                exchange: {
                    disableBranch: "The capacity of the selected branch is full."
                },
                font: "Font",
                yesterday: "Yesterday",
                conjunctions: {
                    and: "And",
                    comma: ","
                },
                onboarding: {
                    access_contact_guide: {
                        title: "Permission to access contacts",
                        desc: "To access the contacts, follow the steps mentioned in the guide.",
                        button: "Contact access guide",
                        step_0: 'To access "‌Bale" contacts, do the following steps:',
                        step_1: "1. Open your phone *settings*.",
                        step_2: "2. Choose *Safari* from the apps.",
                        step_3: "3. Select *Advanced* at the bottom of the page.",
                        step_4: "4. Select the *{flag}* option.",
                        step_5: "5. Enable the *Contact Picker API* option.",
                        step_6: '6. Close the "Bale" program from the screen and open it again.',
                        desc_desktop: 'To access the contacts who have an account in "Yes", log in to this account through your phone and access your contacts.'
                    },
                    add_contact: {
                        title: 'Add contacts to "‌Bale"',
                        desc: 'In the next step, select your contacts. If the contact selected in "Bale" has an account, it will be displayed in your contact list.',
                        button: "Add contacts"
                    },
                    empty_state: {
                        are_more_than_2_present: '{userNamesText} and {count} other contacts are in "Bale".',
                        two_are_present: '{userNamesText} are in "Bale".',
                        one_is_present: '{userNamesText} is in "Bale".'
                    }
                },
                contacts: {
                    search_placeholder: "Search Contact...",
                    update_contacts: "Update contacts",
                    add_new_contact: "Add Contact",
                    contacts_updated: {
                        one_person_added: "\xab{contacts}\xbb was added to the contacts.",
                        multiple_person_added: "\xab{contacts}\xbb were added to the contacts.",
                        error_update_users: "There was a problem adding contacts. Please try again.",
                        and_k_more_contacts: "and {k} others"
                    },
                    error_in_updating: "There was an error updating contacts.",
                    no_contact_imported_error: "The contact added in “Bale” does not have an account.",
                    contact_limit_exceed_error: "The number of contacts has reached the limit.",
                    contact_picker: {
                        access_to_Contacts: "Access to contacts",
                        update_contacts: "Update contacts",
                        access_steps: ["1- Open your phone settings.", "2- Choose *Safari* from among the programs.", "3- At the bottom of the page, select *Advanced*.", "4- Select the *Experimental Feature* option.", "5- Activate the *Contact Picker API* option."],
                        select_desc: 'In the list that is displayed to you; By selecting each contact, if they have an account in "Bale", they will be added to "Bale" contacts.',
                        description: 'To view and chat with your friends, you need to import your contacts into "Bale".',
                        do_this_for_update: "Follow the steps below to update:"
                    },
                    ios: {
                        bale_contacts: 'Add contacts to "Bale"',
                        load_contacts: "Loading contacts from vcf file",
                        wrong_file_format_warning: "The file format sent is incorrect."
                    },
                    add_contact: {
                        title: "Add contact",
                        phone_validation: "The mobile number is wrong",
                        phone_empty_error: "Mobile number is required",
                        through_username: "Through username",
                        username: "Username",
                        username_placeholder: "Enter username...",
                        through_phone_number: "Through mobile number",
                        name: "Name",
                        name_placeholder: "name(required)",
                        name_validation: "Name is required",
                        add: "Add",
                        account_not_exist: 'The intended contact does not have an account in "Bale".',
                        already_added: "This contact has already been added.",
                        add_contact_done: "Added to contacts",
                        add_contact_success: "The desired contact was added to contacts.",
                        add_contacts_success: "The desired contacts have been added."
                    },
                    share_bale: {
                        title: 'Introduce "Bale" to your friends',
                        invite: "Invite friends",
                        description: 'Send the link below to your friends and invite them to "Bale"'
                    },
                    confirm_create: {
                        desc: 'To create a {type}, you need to add your contacts to "Bale". If the contact selected in "Bale" has an account, it will be displayed in your contact list.',
                        title: 'Add contacts to "‌Bale"',
                        cancel: "cancel"
                    },
                    create_group: {
                        title: "Create Group",
                        group_name: "Group Name",
                        group_name_placeholder: "Write group name...",
                        upload_avatar: "Upload Group Image",
                        description: "Description",
                        description_placeholder: "Describe your group...",
                        description_description: "Writing a description is optional",
                        create: "Create Group",
                        who_willـbe_added: "What people are added to the group?",
                        member_limit_reached: "The ability to invite a new member has reached the maximum limit when creating a group.",
                        group_type: "Group type",
                        public_desc: "In public groups, everyone can add members to the group.",
                        private_desc: "Private groups can be accessed via invite owner and admin or invite link.",
                        nick_description: "Other people can search your group through the ID below.",
                        nick: "Group ID"
                    },
                    private: "Private",
                    public: "Public",
                    create_channel: {
                        title: "Create Channel",
                        group_name: "Channel Name",
                        group_name_placeholder: "Write Channel name",
                        upload_avatar: "Upload Channel Image",
                        description: "Description",
                        description_placeholder: "Describe your channel...",
                        description_description: "Writing a description is optional",
                        create: "Create Channel",
                        who_willـbe_added: "What people are added to the channel?",
                        group_type: "Channel type",
                        public_desc: "Public channels can be found in search, anyone can join them.",
                        private_desc: "Private channels can be accessed via invite owner and admin or invite link.",
                        member_limit_reached: "The ability to invite a new member has reached the maximum limit when creating a channel.",
                        nick_description: "Other people can search your channel through the ID below.",
                        nick: "Channel ID",
                        nick_delete: "Remove ID",
                        nick_warn: "ID must be at least 5 characters of English lowercase letters and numbers. You can also use underscores between characters"
                    },
                    orderBy: {
                        name: "ordered by name",
                        presence: "sorted by last visit time"
                    },
                    blocked: "You have blocked this user.",
                    update: "update",
                    nick_placeholder: "http://ble.ir/",
                    status: {
                        nick_error_exist: '"{id}" already selected',
                        nick_accepted: '"{id}" is possible',
                        nick_error_empty: "Entering ID is required",
                        nick_error_invalid: "ID must be at least 5 characters of English lowercase letters and numbers. You can also use underscores between characters",
                        nick_error_forbidden: "Using this nick is not possible.",
                        nick_searching: "Checking ID..."
                    },
                    organization: {
                        title: "{organiztionName} Organization contacts",
                        error: "Your request encountered an issue. Please try again."
                    }
                },
                textMessage: "message",
                greeting: "say hello to {name}",
                scheduled: {
                    empty_message: "You have no scheduled messages.",
                    unschedule_failed_count: "Failed to delete {count} message(s)!"
                },
                scheduled_messages: {
                    title: "Scheduled Messages"
                },
                dailogs_empty_state: '{userNamesText} and {count} other contacts are in "Bale".',
                invalid_file_type: "It's not possible to upload this photo.",
                suspend_user: {
                    title: "Limited user account",
                    titleProfile: "Suspended",
                    descriptions: "Your account has been suspended. To resolve the issue, please visit {link}."
                },
                change_phone_number: {
                    item_description: "Click to change mobile number.",
                    title: "changing phone number",
                    info: {
                        first_section: {
                            title: "By changing your mobile number, these items will not be transferred to your new number:",
                            items: ["The connection to the wallet balance will be disconnected, but you can withdraw the current balance before changing the mobile number;", "Verified cards will require re-verification;", "If you join the advertising panel, you will need to authenticate again.", "If the pocket gift is sent and not opened, the amount will be returned to the wallet of the current number;"]
                        },
                        second_section: {
                            title: "By changing your phone number, these items will be transferred to your new number:",
                            items: ["Account information (name, username, profile picture, about me, etc.) will be transferred to your new mobile number;", "Personal, group, channel, bot messages, and their history will be transferred to your new mobile number;", "In the case of group and channel ownership, their ownership will be transferred to your new mobile number;", "Privacy and security settings will be transferred to your new mobile number."]
                        }
                    },
                    accept_terms: "I have read all the conditions and agree with them.",
                    kiff_error: "The wallet is not valid.",
                    enter_new_phone_number: `
    Your new mobile number will receive the login code via SMS.</br>
    Note, the number you enter must not have a user account in "Bale".
    `,
                    new_phone_number: "new phone number",
                    new_number_placeholder: "912  345  6789",
                    invalid_number_error: "invalid phon number",
                    less_length_number_error: "The phone number must be 10 digits.",
                    same_number_error: "The new phone number must be different from the current number.",
                    number_already_exist: "The new contact number must be different from the current number.",
                    otp: {
                        code: "Verification Code",
                        placeholder: "1234",
                        code_sent: "We sent the verification code to your number {phone_number}.",
                        wrong_phone_number: "Is this the wrong number?",
                        until_code: "Until you receive the code",
                        get_new_code: "Get new code"
                    },
                    errors: {
                        USER_ALREADY_EXISTS: "The entered number has a user account.",
                        PHONE_NUMBER_INVALID: "Incorrect mobile number entered."
                    },
                    error_modal: {
                        title: "Mobile number cannot be changed.",
                        description: "Your wallet balance is {amount} thousand Iranian Toman. To change your mobile number, first withdraw your wallet balance, then try changing your mobile number again. ",
                        description_second_paragraph: "You can use your wallet balance for recharging, internet packages, and more."
                    },
                    notify_contacts: {
                        title: "Informing Contacts",
                        desc: "Do you want your contacts to be informed about the change of your mobile number?",
                        only_contacts: {
                            title: "Contacts",
                            desc: "Only your contacts will be informed about the change of your mobile number.",
                            add_exception: "Add Excpetion",
                            desc_selected: "excpet {number} selected contact"
                        },
                        custom_contacts: {
                            title: "Favorite contact",
                            desc: "Only your Favorite contacts will be informed about the change of your mobile number.",
                            desc_selected: "{number} contact have been selected",
                            add: "Add"
                        }
                    },
                    succeeded: "The mobile number has been changed successfully."
                },
                goToFirstMessage: "go to first Message",
                click: "Click",
                tap: "Tap",
                channelComment: {
                    comment: "Comment",
                    comments: "Comments",
                    settings: {
                        title: "comment settings",
                        enable_comment: "Add comments to posts",
                        enable_comment_desc: "If this option is enabled, the comment will be added to the posts you send from now on.",
                        success_set_title: "Comments for your channel have been successfully activated.",
                        success_set_description: "From now on, all your channel posts and comments will be sent to *\xab{title}\xbb*.",
                        deactivated: "deactivated",
                        activated: "activated",
                        leave_comment_permissions: "Leave comment permissions",
                        leave_comment_p_title: "What do those who can write comments have access to?",
                        join_group: "join group",
                        see_group: "see group"
                    },
                    leave_comment: "Leave comment",
                    errors: {
                        error_activate_comment: "The comment is not enabled. Please try again.",
                        join_to_change_settings: "To set up a license, join the \xab{group}\xbb group.",
                        leave_comment_disabled: "Comments for this post have been disabled."
                    },
                    no_discussion: "Comment",
                    discussion_started: "One Comment",
                    ban_leave_comment: "Remove leave comment permission"
                },
                groupReplies: {
                    reply: "Reply",
                    replies: "Replies",
                    replies_title: "Replies",
                    replies_started: "Replies started"
                },
                singular_verb: "است",
                plural_verb: "اند",
                plural_suffix: "s",
                inviteGroup: {
                    title: "Invite via link",
                    description: "Due to the privacy settings of these {users}, adding to the {groupType} is not possible. You can invite them using the link below.",
                    users: {
                        singleUser: "user",
                        multipleUser: "users"
                    },
                    label: "Sent Message",
                    message: 'Hello, you can join the "{groupName}" {groupType} through the link below.\n{link}',
                    sendInviteLink: "Send invite link",
                    toastText: "The message was sent",
                    placeholder: "Write the sent text"
                },
                relatedGroups: {
                    title: "Related {groupType}s",
                    moreChannels: "More {groupType}s"
                },
                privateGroup: {
                    title: "Join the group"
                },
                another_member: "another member",
                quote: '"{name}"',
                forwarded_from: "Forwarded from ",
                recommendation: {
                    title: "Recommended {groupType}{s}",
                    description: "{member} members | @{nickname}",
                    seeMoreGroups: "See More {groupType}",
                    contextMenu: {
                        join: "Join",
                        see: "View {groupType}"
                    }
                },
                share_target: {
                    share_hint: "Share with...",
                    select_user_to_share: "Select at least one contact to share the message."
                },
                group: {
                    status: {
                        title_error_empty: "Entering name is required.",
                        title_error_forbidden: "Using this name is not possible."
                    },
                    profile: {
                        permissions: {
                            remove: {
                                success: "Access successfully removed."
                            },
                            general: {
                                error: "There was an error setting permissions.",
                                success: "The changes were made successfully."
                            },
                            set_user_permissions: {
                                title: "Personalized title",
                                text_field: {
                                    label: "Personalized title",
                                    placeholder: "Enter a personalization title...",
                                    help: "This title is displayed next to the name."
                                },
                                errors: {
                                    general: "There was an error setting permissions.",
                                    max_length_limit: "The entered title has reached the maximum number of characters allowed."
                                },
                                change_success: 'The title for "{name}" was registered.'
                            }
                        },
                        banned: {
                            title: "Removed users",
                            description: "Users removed from the {groupType} by admins or owners can’t rejoin via invite links.",
                            unRemove: "Delete from this list",
                            bannedBy: "Removed by {name}",
                            emptyState: "You have not deleted the user in the {groupType}.",
                            removedBy: '"{name}"  removed from this list.'
                        }
                    }
                },
                unblockedUserToast: '"{name}" has been removed from the blocked users list.',
                banned: {
                    is_banned_due_to: "Based on user reports, this message has been blocked due to *{reason}*.",
                    banned: "Banned",
                    sender_warning: 'Please note that publishing this type of content is against the "Bale" rules, and if you repeat it, your {type} will be banned.',
                    banned_message: "banned message"
                },
                webApp: {
                    contextMenu: {
                        open_bot: "Open Bot",
                        reload_page: "Reload Page",
                        add_to_homescreen: "Add to Home screen",
                        terms: "Terms of Use",
                        settings: "Settings",
                        close_miniapp: "Close Miniapp"
                    },
                    close_description: "Changes that you made may not be saved.\nDo you want to close this miniapp?",
                    open_confirm_modal_terms: "Terms of Service",
                    open_from_dialog: "Open",
                    minimized_text: "{active} and {count} other bots",
                    bot_tabs: "Tabs",
                    see_active_tabs: "See active bots",
                    close_tab: "{name} was closed.",
                    max_concurrent_limit: "You can't open more than {max} mini apps at the same time. Please close some tabs first.",
                    agreements: {
                        unblockBotTitle: "Unblock Bot",
                        unblockBotDescription: "You have blocked the {name} bot. The bot will be unblocked once you launch it again.",
                        launchNewBotTitle: "Launch new Bot",
                        launchNewBotWithNewTerms: "By launching {name} bot, you agree to the {terms} for bots in “Bale Messenger”, and it will be able to send you messages and appear in your dialog list",
                        launchNewBotWithMiniApp: "By launching the {name} bot, it will be able to send you messages and appear in your dialog list.",
                        termsUpdatedTitle: "Update Terms of Use",
                        termsUpdatedDescription: "By launching this bot, you agree to the {terms} for bots in “Bale Messenger”"
                    }
                },
                bots: {
                    activeUsers: "monthly users",
                    customAction: {
                        unsupportedButton: "Your version of the app doesn't support this button. Please update your version."
                    },
                    rating: {
                        description: "Bot Rating",
                        title: "How would you rate {name} bot?",
                        submit: "Submit",
                        inputPlaceholder: "Enter your feedback...",
                        inputLabel: "Feedback",
                        limit: "You have reached the maximum character limit.",
                        submitted: "Your rating was successfully submitted.",
                        failed: "Due to a technical problem, your rating could not be submitted."
                    }
                },
                search_file: "Search File",
                ramz: {
                    set_password: "set password",
                    set_password_desc: "Enter 6-digit password.",
                    set_password_error: "There was an error creating the password. Please try again.",
                    check_password: "Enter password",
                    forget_password: "Forgot your password?",
                    wrong_password: "The password is incorrect.",
                    recover_password: "password recovery",
                    recover_password_desc: "Two-step verification is enabled for you. Enter the two-step verification code to restore.",
                    code_via_sms: "Enter the code sent via SMS.",
                    check_by_biometrics: "Fingerprint login",
                    entered_wrong_code: "The entered code is incorrect.",
                    resend_code: "Resend code",
                    enter_password: "Enter 6-digit password",
                    not_equal_passwords: "Passwords are not the same.",
                    error_transfer: "The transfer process encountered an error, please re-enter your password.",
                    error_otp_already_sent: "The code has been sent to you. Please apply again in 2 minutes.",
                    error_biometry_failed: "Please try again or enter a password.",
                    protected_content_note: "After entering the password, the message content will be displayed to you.",
                    show_message: "View Message",
                    message: "message",
                    password_created_success: "Your password has been created successfully.",
                    password_usage_info: "With this password, you can view some messages from banking and organizational bots.",
                    set_password_protected_message_desc: "By creating a password, you can view the content of encrypted messages.",
                    set_password_gold_packet_and_wallet_desc: "By creating a password, you can buy and sell gold with more security.\nThis password is used in the process of buying and selling gold, sending gold packets, bank-to-bank transfers, and viewing some messages from banking and organizational bots.",
                    successfully_reset_password: "This password is used in the process of buying and selling gold, sending gold packets, bank-to-bank transfers, and viewing some messages from banking and organizational bots.",
                    check_password_text: "Enter 6-digit password.",
                    enter_confirm_code: "Enter confirm code"
                },
                transcript: {
                    is_transcripting: "درحال تبدیل صوت به متن ...\nلطفاً کمی صبر کنید.",
                    error: {
                        err_limit_reached: "Daily usage limit has been reached.",
                        max_limit_duration: "Cannot convert voice messages longer than {duration} minutes.",
                        no_text_exist: "No text was detected in the voice message.",
                        general: "The service is temporarily unavailable.\nPlease try again in a few minutes."
                    }
                },
                link_summary: {
                    view_summary: "View Summary",
                    title: "Link Summary (Experimental)",
                    loading: "Generating summary...",
                    error: "Failed to load summary. Please try again.",
                    url_label: "Link",
                    summary_label: "Summary",
                    feedback_received: "Thank you for your feedback!"
                },
                try_again: "Try Again",
                upgrade_wallet: {
                    remain_balance: "remain balance",
                    enter_account_no: "To withdraw from the savings account and verify, enter your Melli Bank account number.",
                    melli_account_no: "Melli Bank account number",
                    account_no_required: "Enter the account number is required",
                    card_number: "card number"
                },
                meet: {
                    types: {
                        meet: "Call",
                        private_meet: "Private Call",
                        audioMeet: "Audio Call",
                        videoMeet: "Video Call",
                        groupMeet: "Group Call"
                    },
                    default_title: {
                        multi_peer: "Group Call",
                        call_link: "Call via link"
                    },
                    state: {
                        connecting: "Connecting...",
                        starting: "Requesting call...",
                        ringing: "Ringing...",
                        pairing: "Pairing...",
                        reconnecting: "Reconnecting...",
                        incoming: "Incoming audio call...",
                        incomingVideo: "Incoming video call...",
                        ended: "Call ended",
                        endedType: "{type} ended",
                        errors: {
                            userIsBusy: "The contact is currently on a call.",
                            missed: "Missed call",
                            decline: "Declined call",
                            disconnected: "Disconnected from server"
                        }
                    },
                    bubbles: {
                        success: "Successful {type}",
                        unsuccess: "Unsuccessful {type}",
                        missed: "Missed call",
                        missed_by_user: "Missed {type}",
                        rejected: "Rejected {type}",
                        rejected_by_user: "Declined {type}"
                    },
                    poorConnection: "Poor internet connection for {username}.",
                    prepare: {
                        guest: {
                            placeholder: "For example: Mahdi",
                            label: "User Name"
                        },
                        info: {
                            start: 'Are you sure you want to call "{name}"?',
                            accept: 'Are you sure you want to answer the call from "{name}"?',
                            startGroup: 'Are you sure you want to start a call in group "{name}"?',
                            joinGroup: 'Are you sure you want to join the group call "{name}"?',
                            asking_to_join: "Asking to join call...",
                            empty_room: "No one else is in the call"
                        },
                        startCall: "Start Call",
                        acceptCall: "Answer Call",
                        ask_to_join_call: "Ask To Join",
                        joinCall: "Join Call",
                        move_to_browser: "Move to Browser",
                        iOSBrowser: "For a better call experience, please use Google Chrome browser.",
                        iOS_PWA_Browser: "Due to limitations of the Safari web applications, open the video call in a browser."
                    },
                    buttons: {
                        reject: "End Call",
                        voice: "Mute",
                        mute: "Unmute",
                        speaker: "Speaker",
                        headphone: "Handsfree",
                        no_sound: "Turn off the sound",
                        close: "Cancel",
                        call: "Retry Call",
                        accept: "Answer",
                        decline: "Decline",
                        bluetooth: "Bluetooth",
                        calling: "Mobile Phone",
                        cameraSwitch: "Switch Camera",
                        camera: "Close Camera",
                        cameraMute: "Open Camera",
                        screenShare: "Close Screen",
                        screenShareMute: "Share Screen",
                        invite: "Invite to Call",
                        more_menu: "More Menu",
                        membersList: "Call Members"
                    },
                    errors: {
                        call_failed_not_approved: "Due to privacy settings, you are not allowed to call this user.",
                        call_failed_unknown: "Call failed due to {error}",
                        call_error: "An error occurred while making the call.",
                        start_group_call: {
                            limit_count_128: "Only groups with less than 128 members can make calls.",
                            limit_count: "Only groups with less than {count} members can make calls.",
                            owner_only: "Only the group owner can make calls.",
                            not_a_member: "Only group members can make calls.",
                            not_approved: "Group call are not allowed.",
                            permission_denied: "You don't have permission to access this feature.",
                            client_deprecated: "To start a group call, please update your app"
                        },
                        join_group_call: {
                            limit_count: "The call has reached the maximum count of {count} participants.",
                            limit_full: "The group call is already full.",
                            client_deprecated: "To join a group call, please update your app",
                            permission_denied: "You are not allowed to enter this call."
                        },
                        private_call: {
                            user_blocked: "You are not allowed to call this user due to block.",
                            deleted_account: "You are not allowed to call this user due to account deletion."
                        },
                        group_call: {
                            not_a_member: "You are not allowed to call this group due to leaving the group.",
                            deleted_group: "You are not allowed to call this group due to group deletion."
                        }
                    },
                    call_user: {
                        more_participants: "{count} more"
                    },
                    videoCallModal: {
                        title: "Switch to Video Call",
                        description: "Do you want to switch from audio call to video call?"
                    },
                    tooltip: {
                        title: "Video Call",
                        description: "You can make video calls from this section.",
                        startCall: "Start Call"
                    },
                    closeModal: {
                        title: "End Call",
                        content: {
                            description: "Are you sure you want to leave the ongoing call?",
                            checkbox: "End group call"
                        }
                    },
                    PWA_modal: {
                        title: "Call from Browser",
                        description: "Open the video call in browser due to limitations of Safari web applications."
                    },
                    devices: {
                        mic: "Microphone",
                        camera: "Camera",
                        screenShare: "Screen Share",
                        permissionDenied: "Permission to access {device} denied.",
                        deviceNotFound: "{device} not found.",
                        globalError: "An error occurred with input devices."
                    },
                    already_in_call: "Joining two calls simultaneously is not possible",
                    already_in_call_btn: "This button is not available during a call.",
                    userIsBusy: "The contact is currently on a call. Please try again in a few minutes.",
                    logs: {
                        recent_calls: "Recent Calls",
                        ongoing_calls: {
                            title: "Ongoing Calls",
                            back_to_call: "Back to Call",
                            back: "Back",
                            join_to_call: "Join the Call",
                            join: "Join"
                        },
                        call_contacts: "Call Contacts",
                        create_call_link: "Create Call Link",
                        empty_description: "You have not made any calls recently. You can call your contacts in Bale.",
                        call_to_contacts: "Call Contacts",
                        tooltip: {
                            title: "Audio and Video Call",
                            description: "You can view your call history from this section.",
                            log_to_contacts: "You can find your Bale contacts from this section."
                        },
                        deleteModal: {
                            title_one: "Delete call",
                            title_multiple: "Delete {count} calls",
                            description_one: "Are you sure you want to delete this call?",
                            description_multiple: "Are you sure you want to delete {count} recent calls?"
                        },
                        changeCurrentCallModal: {
                            title: "Joining a New Call",
                            description: "By joining a new call, you will leave the current call."
                        }
                    },
                    invite: {
                        ringing: {
                            two: "{first} and {second}",
                            three: "{first}, {second}, and {third}",
                            more: "{name} and {count} more"
                        },
                        inCallModal: {
                            title: "Add Members from Contacts"
                        },
                        toasts: {
                            joined: "{user} joined the call.",
                            rejected: "{user} declined the invitation.",
                            not_available: "{user} is not available.",
                            invite_limit_reached: "The call has reached the maximum limit of {count} participants.",
                            privacy_error: "{user} was not invited due to privacy settings.",
                            multiple_privacy_error: "{user} were not invited due to privacy settings.",
                            limited_error: "{user} was not invited due to call capacity limitations.",
                            multiple_limited_error: "{user} were not invited due to call capacity limitations.",
                            err_invite_not_supported_for_other_peer: "The version of Bale for {user} is not up to date to use this feature."
                        },
                        tooltip: {
                            in_call_icon_tooltip: "You can add your contacts to the call from this section."
                        }
                    },
                    device_settings: {
                        title: "Sound input and output",
                        input: "Sound Input",
                        no_output_available: "Speaker not found.",
                        no_input_available: "Microphone not found.",
                        output: "Sound Output",
                        devices: {
                            microphone: "Microphone",
                            speaker: "Speaker",
                            hands_free: "Handsfree",
                            earpiece: "Phone",
                            bluetooth: "Bluetooth"
                        },
                        no_sound: "Turn off the sound",
                        default_device: "Default device"
                    },
                    modal_menu: {
                        mute_voice: "Mute Voice",
                        mute_video: "Close Camera",
                        send_message: "Send Message",
                        remove_participant: "Remove from Call"
                    },
                    modals: {
                        removeParticipant: {
                            title: "Remove from Call",
                            description: 'Are you sure you want to remove "{name}" from this call?',
                            confirm: "Remove from Call"
                        },
                        create_link: {
                            title: "Call Link",
                            call_link: "Call Link",
                            states: {
                                creating: "Creating Call Link...",
                                error: "Try again"
                            },
                            buttons: {
                                copy: "Copy",
                                forward: "Forward",
                                share: "Share",
                                join_call: "Join Call",
                                generate_link: "Create Call Link"
                            },
                            toasts: {
                                link_successfully_created_with_duration: "This link will be valid for the next {duration}.",
                                limit_reached: "Creating a new link is not possible",
                                error_creating_link: "Creating link failed, please try again.",
                                link_copied: "Call Link Copied.",
                                only_share_with_trusted: "Only share the call link with people you trust."
                            },
                            call_title: {
                                label: "Call Title",
                                placeholder: "For example: Call via link",
                                help: "The call link will be sent under this title"
                            },
                            call_type: {
                                private: {
                                    title: "Private",
                                    description: "Each person's entry into a private call is subject to approval by the call owner."
                                },
                                public: {
                                    title: "Public",
                                    description: 'Any "Bale" user can be added to the call via the link.\nNote: Only share the call link with people you trust.'
                                }
                            },
                            public_descriptions: {
                                one: 'This is a public call and all "Bale" users can be added to the call by the link.',
                                two: "Share the link only with trusted people."
                            }
                        },
                        record: {
                            title: "Record Call",
                            start_description: "Do you want to *start* recording the call?",
                            end_description: "Do you want to *stop* recording the call?"
                        }
                    },
                    call_management: {
                        toasts: {
                            you_muted_by: "“{name}” muted you.",
                            you_muted_name: "You muted “{name}”.",
                            your_camera_muted_by: "“{name}” closed your camera.",
                            you_muted_name_camera: "You closed the camera of “{name}”.",
                            you_removed_by: "“{name}” removed you from call.",
                            you_removed_name: "You removed “{name}” from call."
                        }
                    },
                    get_link_details: {
                        invalid_link: "Call link is invalid",
                        call_not_found: "Call link is invalid or has expired."
                    },
                    more_menu: {
                        title: "More Menu",
                        options: {
                            membersList: "Call Members",
                            callLink: "Call Link",
                            device_settings: "Sound Input and Output",
                            startRecording: "Start Call Recording",
                            stopRecording: "Stop Call Recording",
                            record: "Record Call",
                            stopRecord: "Stop Recording",
                            raise_hand: "Raise hand",
                            lower_hand: "Lower hand"
                        }
                    },
                    share_link: {
                        title: "Share Call Link",
                        default_text_title: "Call via link",
                        text: "\uD83D\uDCDE *{title}*\n⏰ *Created at:* {create_date}\n\uD83D\uDD17 *Link Address:*\n"
                    },
                    record: {
                        start_record: "Start Recording",
                        start_record_confirm: "Are you sure you want to record the call? The maximum recording time is one hour, after which the recording will stop.",
                        started: "Call recording started by \xab{name}\xbb.",
                        end_record: "End Recording",
                        end_record_confirm: "Are you sure you want to end the call recording?",
                        ended: "Call recording finished.",
                        count_down: "ًRecording starts in 3 seconds",
                        is_recording: "Call is being recorded"
                    },
                    raise_hand: {
                        snackbars: {
                            hand_raised: "\xab{name}\xbb raised a hand.",
                            you_lowered_all_hands: "You lowered all hands.",
                            you_lowered_user_hand: "You lowered \xab{name}\xbb's hand.",
                            lowered_your_hand: "\xab{name}\xbb lowered your hand.",
                            admin_lowered_all_hands: "\xab{name}\xbb lowered all hands.",
                            multiple_hands_raised: "\xab{name}\xbb and {count} others raised their hands.",
                            view_raised_hands: "View"
                        },
                        confirm_dialog: {
                            lower_all_hands: "Lower All Hands",
                            lower_confirm_button: "Lower all",
                            lower_confirm_text: "Are you sure you want to lower all hands?"
                        },
                        lower_all_button: "Lower all",
                        raised_hands: "Raised hands",
                        lower_hand_button: "Lower hand"
                    },
                    call_link_tooltip: "Call link is here",
                    call_record_tooltip: "You can record call from here",
                    call_more_menu_tooltip: "Call link and call record is here",
                    membersList: "Call Members",
                    participant: "Participant",
                    invited: "Invited to Call",
                    pending: "Waiting to be Accepted",
                    initiator: "Call initiator",
                    admin: "Call admin",
                    no_participant: "No Participant",
                    record_call: "Record Call",
                    recording: "Recording...",
                    wait_for_ending_record: "Stopping call recording. Please wait.",
                    unknown: "Unknown",
                    unknown_error: "Your request was not processed for an unknown reason."
                },
                topic: {
                    recent_conversations: "Recent conversations",
                    new_conversation: "New conversation",
                    nth_conversation: "Conversation",
                    search: "Search conversations",
                    rename: "Rename",
                    delete_alert: "Are you sure you want to delete this conversation?",
                    delete_convesation: "Delete Conversation",
                    rename_title: "Edit Conversation Title",
                    rename_placeholder: "Enter Conversation Title",
                    rename_label: "Conversation Title",
                    all_conversations: "All Conversations"
                },
                IconAdBanner: {
                    badge: "Advertisement"
                }
            }
        }
    }
]);
//# sourceMappingURL=570.8f303c4d.js.map