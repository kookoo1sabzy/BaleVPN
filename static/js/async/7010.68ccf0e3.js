try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "50270059-cfb3-4e9f-a376-d80c3b600b4a", e._sentryDebugIdIdentifier = "sentry-dbid-50270059-cfb3-4e9f-a376-d80c3b600b4a")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["7010"], {
        5620: function(e, t, o) {
            o.d(t, {
                w: () => a
            });
            let a = {
                types: {
                    meet: "تماس",
                    private_meet: "تماس فردی",
                    audioMeet: "تماس صوتی",
                    videoMeet: "تماس تصویری",
                    groupMeet: "تماس گروهی"
                },
                default_title: {
                    multi_peer: "تماس چندنفره",
                    call_link: "تماس از طریق پیوند"
                },
                state: {
                    connecting: "درحال اتصال...",
                    starting: "درخواست تماس...",
                    ringing: "درحال تماس...",
                    pairing: "درحال برقراری ارتباط...",
                    reconnecting: "درحال اتصال مجدد...",
                    incoming: "تماس صوتی بله...",
                    incomingVideo: "تماس تصویری بله...",
                    ended: "تماس تمام شد",
                    endedType: "{type} تمام شد",
                    errors: {
                        userIsBusy: "مخاطب درحال مکالمه است.",
                        missed: "عدم پاسخگویی",
                        decline: "رد تماس",
                        disconnected: "عدم اتصال به سرور"
                    }
                },
                bubbles: {
                    success: "{type} موفق",
                    unsuccess: "{type} ناموفق",
                    missed: "عدم پاسخگویی",
                    missed_by_user: "{type} از دست رفته",
                    rejected: "{type} لغو شده",
                    rejected_by_user: "{type} رد شده"
                },
                poorConnection: "اینترنت {username} ضعیف است.",
                prepare: {
                    guest: {
                        placeholder: "برای مثال: مهدی خان",
                        label: "نام کاربر"
                    },
                    info: {
                        start: "آیا از تماس با \xab{name}\xbb اطمینان دارید؟",
                        accept: "آیا از پاسخ دادن به تماس \xab{name}\xbb اطمینان دارید؟",
                        startGroup: "آیا از شروع تماس در گروه \xab{name}\xbb اطمینان دارید؟",
                        joinGroup: "آیا از پیوستن به تماس گروه \xab{name}\xbb اطمینان دارید؟",
                        asking_to_join: "درحال درخواست اجازه ورود...",
                        empty_room: "فرد دیگری در تماس حضور ندارد."
                    },
                    startCall: "شروع تماس",
                    acceptCall: "پاسخ دادن به تماس",
                    ask_to_join_call: "درخواست پیوستن به تماس",
                    joinCall: "پیوستن به تماس",
                    move_to_browser: "انتقال به مرورگر",
                    iOSBrowser: "برای داشتن تجربه بهتر تماس، لطفا از <b>مرورگر کروم</b> استفاده کنید.",
                    iOS_PWA_Browser: "به دلیل مشکل اپلیکیشن‌های تحت وب سافاری، تماس تصویری را در <b>مرورگر</b> باز کنید."
                },
                buttons: {
                    reject: "قطع تماس",
                    voice: "بی‌صدا کردن",
                    mute: "‌با‌صدا کردن",
                    speaker: "بلندگو",
                    headphone: "هندزفری",
                    no_sound: "قطع کردن صدا",
                    close: "انصراف",
                    call: "تماس مجدد",
                    accept: "پاسخ دادن",
                    decline: "رد تماس",
                    bluetooth: "بلوتوث",
                    calling: "گوشی تلفن همراه",
                    cameraSwitch: "تغییر دوربین",
                    camera: "بستن دوربین",
                    cameraMute: "باز کردن دوربین",
                    screenShare: "بستن صفحه",
                    screenShareMute: "اشتراک‌گذاری‌ صفحه",
                    invite: "دعوت به تماس",
                    more_menu: "موارد بیشتر",
                    membersList: "اعضای تماس"
                },
                errors: {
                    call_failed_not_approved: "به علت تنظیمات حریم خصوصی، شما امکان برقراری تماس با این کاربر را ندارید.",
                    call_failed_unknown: "تماس به دلیل {error} برقرار نشد",
                    call_error: "خطایی در برقراری تماس رخ داده است.",
                    start_group_call: {
                        limit_count_128: "امکان تماس فقط برای گروه‌های زیر ۱۲۸ نفر وجود دارد.",
                        limit_count: "امکان تماس فقط برای گروه‌های زیر {count} نفر وجود دارد.",
                        owner_only: "امکان تماس فقط برای مالک گروه وجود دارد.",
                        not_a_member: "امکان تماس فقط برای اعضای گروه وجود دارد.",
                        not_approved: "دسترسی شروع تماس گروهی وجود ندارد.",
                        permission_denied: "شما مجوز دسترسی این قابلیت را ندارید.",
                        client_deprecated: "برای شروع تماس گروهی، نسخهٔ ‌خود را به‌روز کنید."
                    },
                    join_group_call: {
                        limit_count: "تماس به سقف مجاز {count} نفر رسیده است.",
                        limit_full: "ظرفیت تماس گروهی کامل است.",
                        client_deprecated: "برای پیوستن به تماس گروهی، نسخهٔ ‌خود را به‌روز کنید.",
                        permission_denied: "شما اجازه ورود به این تماس را ندارید."
                    },
                    private_call: {
                        user_blocked: "به دلیل مسدود کردن کاربر، امکان برقراری تماس را ندارید.",
                        deleted_account: "به دلیل حذف حساب کاربری، امکان برقراری تماس را ندارید."
                    },
                    group_call: {
                        not_a_member: "به دلیل ترک گروه، امکان برقراری تماس را ندارید.",
                        deleted_group: "به دلیل حذف گروه، امکان برقراری تماس را ندارید."
                    }
                },
                call_user: {
                    more_participants: "{count} نفر دیگر"
                },
                videoCallModal: {
                    title: "تبدیل به تماس تصویری",
                    description: "آیا می‌خواهید تماس صوتی را به تماس تصویری تغییر دهید؟"
                },
                tooltip: {
                    title: "تماس تصویری",
                    description: "از این قسمت می‌توانید تماس تصویری بگیرید.",
                    startCall: "شروع تماس"
                },
                closeModal: {
                    title: "خروج از تماس",
                    content: {
                        description: "آیا از خروج از این تماس اطمینان دارید؟",
                        checkbox: "پایان دادن به تماس گروهی"
                    }
                },
                PWA_modal: {
                    title: "تماس از مرورگر",
                    description: "به دلیل مشکل اپلیکیشن‌های تحت وب سافاری، تماس تصویری را در مرورگر باز کنید."
                },
                devices: {
                    mic: "میکروفون",
                    camera: "دوربین",
                    screenShare: "اشتراک تصویر",
                    permissionDenied: "مجوز دسترسی به {device} وجود ندارد.",
                    deviceNotFound: "{device} پیدا نشد.",
                    globalError: "خطایی در دستگاه‌های ورودی رخ داد."
                },
                already_in_call: "امکان ورود همزمان به دو تماس وجود ندارد.",
                already_in_call_btn: "در هنگام تماس، امکان استفاده از این دکمه وجود ندارد.",
                userIsBusy: "کاربر مورد نظر درحال مکالمه است، چند دقیقه دیگر تماس بگیرید.",
                logs: {
                    recent_calls: "تماس‌های اخیر",
                    ongoing_calls: {
                        title: "تماس‌های درحال برگزاری",
                        back_to_call: "بازگشت به تماس",
                        back: "بازگشت",
                        join_to_call: "پیوستن به تماس",
                        join: "پیوستن"
                    },
                    call_contacts: "مخاطبین تماس",
                    create_call_link: "ایجاد پیوند تماس",
                    empty_description: "شما اخیرا با کسی تماس نگرفتید. می‌توانید با مخاطبین‌‌تان در بله تماس بگیرید.",
                    call_to_contacts: "تماس با مخاطبین",
                    tooltip: {
                        title: "تماس صوتی و تصویری",
                        description: "از این قسمت می‌توانید تاریخچه تماس خود را ببینید.",
                        log_to_contacts: "از این قسمت می‌توانید مخاطبین \xabبله\xbb خود را پیدا کنید."
                    },
                    deleteModal: {
                        title_one: "حذف تماس",
                        title_multiple: "حذف {count} تماس",
                        description_one: "آیا از حذف این تماس مطمئن هستید؟",
                        description_multiple: "آیا از حذف {count} تماس اخیر مطمئن هستید؟"
                    },
                    changeCurrentCallModal: {
                        title: "پیوستن به تماس جدید",
                        description: "با پیوستن به تماس جدید از تماس فعلی خارج می‌شوید."
                    }
                },
                invite: {
                    ringing: {
                        two: "{first} و {second}",
                        three: "{first}، {second} و {third}",
                        more: "{name} و {count} نفر دیگر"
                    },
                    inCallModal: {
                        title: "افزودن عضو از مخاطبین"
                    },
                    toasts: {
                        joined: "{user} به تماس پیوست.",
                        rejected: "{user} دعوت را رد کرد.",
                        not_available: "{user} در دسترس نیست.",
                        invite_limit_reached: "تماس به سقف مجاز ({count} نفر) رسیده است.",
                        privacy_error: "{user} به دلیل تنظیمات حریم خصوصی دعوت نشد.",
                        multiple_privacy_error: "{user} به دلیل تنظیمات حریم خصوصی دعوت نشدند.",
                        limited_error: "{user} به دلیل محدودیت ظرفیت تماس دعوت نشد.",
                        multiple_limited_error: "{user} به دلیل محدودیت ظرفیت تماس دعوت نشدند.",
                        err_invite_not_supported_for_other_peer: "نسخه بله \xab{user}\xbb برای استفاده از این ویژگی به‌روز نیست."
                    },
                    tooltip: {
                        in_call_icon_tooltip: "از این قسمت می‌توانید مخاطبین خود را به تماس اضافه کنید."
                    }
                },
                device_settings: {
                    title: "ورودی و خروجی صدا",
                    input: "ورودی صدا",
                    no_output_available: "بلندگو پیدا نشد.",
                    no_input_available: "میکروفون پیدا نشد.",
                    output: "خروجی صدا",
                    devices: {
                        microphone: "میکروفون",
                        speaker: "بلندگو",
                        hands_free: "هندزفری",
                        earpiece: "تلفن همراه",
                        bluetooth: "بلوتوث"
                    },
                    no_sound: "قطع کردن صدا",
                    default_device: "دستگاه پیش‌فرض"
                },
                modal_menu: {
                    mute_voice: "بی‌صدا کردن",
                    mute_video: "بستن دوربین",
                    send_message: "ارسال پیام",
                    remove_participant: "حذف از تماس"
                },
                modals: {
                    removeParticipant: {
                        title: "حذف از تماس",
                        description: "آیا از حذف \xab{name}\xbb از این تماس اطمینان دارید؟",
                        confirm: "حذف از تماس"
                    },
                    create_link: {
                        title: "پیوند تماس",
                        call_link: "پیوند تماس",
                        states: {
                            creating: "درحال ایجاد پیوند تماس...",
                            error: "تلاش دوباره"
                        },
                        buttons: {
                            copy: "رونوشت",
                            forward: "بازارسال",
                            share: "اشتراک گذاری",
                            join_call: "ورود به تماس",
                            generate_link: "ایجاد پیوند تماس"
                        },
                        toasts: {
                            link_successfully_created_with_duration: "این پیوند، تا {duration} آینده معتبر خواهد بود.",
                            limit_reached: "امکان ایجاد پیوند جدید وجود ندارد.",
                            error_creating_link: "خطا در ایجاد پیوند، دوباره تلاش کنید.",
                            link_copied: "پیوند تماس رونوشت شد",
                            only_share_with_trusted: "پیوند تماس را با افراد مورد اعتماد به اشتراک بگذارید."
                        },
                        call_title: {
                            label: "عنوان تماس",
                            placeholder: "برای مثال: تماس از طریق پیوند",
                            help: "پیوند تماس با این عنوان ارسال می‌شود."
                        },
                        call_type: {
                            private: {
                                title: "خصوصی",
                                description: "ورود هر فرد به تماس خصوصی مشروط به تأیید مالک تماس است."
                            },
                            public: {
                                title: "عمومی",
                                description: "هر کاربر \xabبله\xbb می‌تواند توسط پیوند، به تماس اضافه شود.\nتوجه: پیوند تماس را تنها با افراد مورد اعتماد به اشتراک بگذارید."
                            }
                        },
                        public_descriptions: {
                            one: "این یک تماس عمومی است و هر کاربر \xabبله\xbb می‌تواند توسط پیوند، به تماس اضافه شود.",
                            two: "پیوند تماس را تنها با افراد مورد اعتماد به اشتراک بگذارید."
                        }
                    },
                    record: {
                        title: "ضبط تماس",
                        start_description: "آیا می‌خواهید ضبط تماس را *شروع* کنید؟",
                        end_description: "آیا می‌خواهید ضبط تماس را *تمام* کنید؟"
                    }
                },
                call_management: {
                    toasts: {
                        you_muted_by: "\xab{name}\xbb شما را بی‌صدا کرد.",
                        you_muted_name: "شما \xab{name}\xbb را بی‌صدا کردید.",
                        your_camera_muted_by: "\xab{name}\xbb دوربین شما را بست.",
                        you_muted_name_camera: "شما دوربین \xab{name}\xbb را بستید.",
                        you_removed_by: "\xab{name}\xbb شما را از تماس حذف کرد.",
                        you_removed_name: "شما \xab{name}\xbb را از تماس حذف کردید."
                    }
                },
                get_link_details: {
                    invalid_link: "پیوند تماس معتبر نیست.",
                    call_not_found: "پیوند تماس معتبر نیست و یا منقضی شده است."
                },
                more_menu: {
                    title: "موارد بیشتر",
                    options: {
                        membersList: "اعضای تماس",
                        callLink: "پیوند تماس",
                        device_settings: "ورودی و خروجی صدا",
                        startRecording: "شروع ضبط تماس",
                        stopRecording: "پایان ضبط تماس",
                        record: "ضبط تماس",
                        stopRecord: "توقف ضبط تماس",
                        raise_hand: "بالا بردن دست",
                        lower_hand: "پایین آوردن دست"
                    }
                },
                share_link: {
                    title: "اشتراک‌گذاری پیوند تماس",
                    default_text_title: "تماس از طریق پیوند",
                    text: "\uD83D\uDCDE *{title}*\n⏰ *ساخته‌شده در:‌* {create_date}\n\uD83D\uDD17 *پیوند تماس:*\n"
                },
                record: {
                    start_record: "ضبط تماس",
                    start_record_confirm: "آیا از ضبط تماس اطمینان دارید؟ حداکثر زمان ضبط تماس یک ساعت است و پس از آن ضبط متوقف میشود.",
                    started: "ضبط تماس توسط \xab{name}\xbb شروع شد.",
                    end_record: "پایان ضبط تماس",
                    end_record_confirm: "آیا از پایان دادن به ضبط تماس اطمینان دارید؟",
                    ended: "ضبط تماس متوقف شد.",
                    count_down: "ضبط تماس تا ۳ ثانیه دیگر شروع میشود",
                    is_recording: "تماس در حال ضبط است"
                },
                raise_hand: {
                    snackbars: {
                        hand_raised: "\xab{name}\xbb دست خود را بالا آورد.",
                        you_lowered_all_hands: "شما دست همه را پایین آوردید.",
                        you_lowered_user_hand: "شما دست \xab{name}\xbb را پایین آوردید.",
                        lowered_your_hand: "\xab{name}\xbb دست شما را پایین آورد.",
                        admin_lowered_all_hands: "\xab{name}\xbb دست همه را پایین آورد.",
                        multiple_hands_raised: "\xab{name}\xbb و {count} نفر دیگر دست خود را بلند کردند.",
                        view_raised_hands: "مشاهده"
                    },
                    confirm_dialog: {
                        lower_all_hands: "پایین‌آوردن همه دست‌ها",
                        lower_confirm_button: "پایین آوردن",
                        lower_confirm_text: "آیا از پایین‌آوردن همۀ دست‌ها اطمینان دارید؟"
                    },
                    lower_all_button: "پایین آوردن همه",
                    raised_hands: "دست های بلند شده",
                    lower_hand_button: "پایین آوردن دست"
                },
                call_link_tooltip: "پیوند تماس اینجا قرار دارد",
                call_record_tooltip: "ضبط تماس اینجا قرار دارد",
                call_more_menu_tooltip: "ضبط و پیوند تماس اینجا قرار دارد",
                membersList: "اعضای تماس",
                participant: "شرکت کننده",
                invited: "دعوت‌شده به تماس",
                pending: "در انتظار پذیرفته شدن",
                initiator: "شروع‌کننده تماس",
                admin: "مدیر تماس",
                no_participant: "بدون شرکت کننده",
                record_call: "ضبط تماس",
                recording: "در حال ضبط ...",
                wait_for_ending_record: "در حال توقف ضبط تماس. لطفا کمی صبر کنید.",
                unknown: "نامشخص",
                unknown_error: "درخواست شما به دلیل نامشخص انجام نشد."
            }
        },
        31709: function(e, t, o) {
            o.d(t, {
                GL: () => s,
                PT: () => p,
                pi: () => _
            });
            var a, r = o(56053);
            let n = {
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
                i = (0, r.Z0)({
                    name: "changePhoneNumberSlice",
                    initialState: n,
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
                        resetToInitialState: () => n,
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
            var _ = ((a = {}).ChangePhoneNumber = "ChangePhoneNumber", a.OTPValidation = "OTPValidation", a.SendNotifContacts = "SendNotifContacts", a);
            let l = (0, r.VP)("ChangePhoneNumber"),
                c = (0, r.VP)("OTPValidation"),
                d = (0, r.VP)("SendNotifContacts"),
                p = {
                    ...i.actions,
                    changePhoneNumber: l,
                    validateOTP: c,
                    sendNotifContactsAction: d
                }
        },
        32649: function(e, t, o) {
            o.r(t), o.d(t, {
                strings: () => i
            });
            var a = o(55933),
                r = o(10250);
            o(31709);
            var n = o(5620);
            let i = {
                name: "وب نو",
                confirm_code: "کد تایید",
                nums: {
                    one: "یک",
                    k: "هزار",
                    m: "میلیون",
                    b: "میلیارد",
                    t: "تیلیارد"
                },
                draft: "پیش‌نویس",
                recipient: "نفر",
                recipients: "نفر",
                signout: "خروج",
                signout_modal: {
                    title: "خروج از حساب کاربری",
                    desc: "آیا از خروج از حساب کاربری خود اطمینان دارید؟",
                    confirm: "خروج"
                },
                submit: "تایید و ادامه",
                submit_and_send: "تایید و ارسال",
                submit_and_next: "تایید و بعدی",
                submit_and_payment: "تایید و پرداخت",
                send_message: "ارسال پیام",
                back: "بازگشت",
                close: "بستن",
                confirm: "تایید",
                error: "خطا",
                return_to_bale: "بازگشت به \xabبله\xbb",
                send: "ارسال",
                video_player: {
                    speed: {
                        "0_2": "خیلی آهسته",
                        "0_5": "آهسته",
                        1: "معمولی",
                        "1_5": "سریع",
                        2: "خیلی سریع"
                    }
                },
                reaction_management_modal: {
                    all: {
                        title: "همهٔ واکنش‌ها",
                        desc: "اعضای {groupString} می‌توانند از همهٔ اموجی‌ها برای واکنش استفاده کنند."
                    },
                    some: {
                        title: "انتخاب برخی از واکنش‌ها",
                        desc: "اعضای {groupString} می‌توانند از اموجی‌هایی که در قسمت پایین انتخاب می‌کنید برای واکنش استفاده کنند."
                    },
                    none: {
                        title: "بدون واکنش",
                        desc: "اعضای {groupString} نمی‌توانند هیچ واکنشی به پیا‌م‌ها بدهند."
                    },
                    emoji_list_title: "اموجی‌های واکنش"
                },
                reactionsWarningModal: {
                    title: "لیست واکنش‌ها",
                    description: "سایر اعضای گروه می‌توانند واکنش شما را در لیست واکنش‌ها ببینند."
                },
                reactioners: {
                    others: "{count} نفر دیگر",
                    count: "{count} نفر",
                    reaction: "{count} واکنش"
                },
                seeners: {
                    seen: "{count} بازدید"
                },
                date_time: {
                    minute_ago: "کمتر از ۱ دقیقه پیش",
                    hour_ago: "{minute} دقیقه پیش",
                    today_ago: "ساعت {time}",
                    yesterday_ago: "دیروز ساعت {time}",
                    month_ago: "{weekday} {day} {month}",
                    year_ago: "{day} {month}",
                    else_ago: "{month} {year}",
                    seconds_ago: "{seconds} ثانیه پیش",
                    minutes_ago: "{minutes} دقیقه پیش",
                    hours_ago: "{hours} ساعت پیش",
                    days_ago: "{days} روز پیش",
                    weeks_ago: "{weeks} هفته پیش",
                    months_ago: "{months} ماه پیش"
                },
                justmine_delete: "آیا از حذف این پیام برای خودتان اطمینان دارید؟",
                justmine_delete_multiple: "آیا از حذف این پیام‌ها برای خودتان اطمینان دارید؟",
                really_delete: "آیا از حذف این پیام اطمینان دارید؟",
                really_delete_multiple: "آیا از حذف این پیام‌ها اطمینان دارید؟",
                really_delete_for_all: "آیا از حذف این پیام برای همه اطمینان دارید؟",
                really_delete_for_all_multiple: "آیا از حذف این پیام‌ها برای همه اطمینان دارید؟",
                delete_message: "حذف پیام",
                delete_count_message: "حذف {count} پیام",
                delete_access_types: {
                    JustMine: "این پیام فقط برای شما حذف می‌شود.",
                    ForAllPrivate: 'و این پیام برای "{name}" هم حذف شود',
                    ForAllGroups: "برای تمامی اعضا حذف شود."
                },
                GroupType: {
                    0: "گروه",
                    1: "کانال",
                    2: "گروه"
                },
                general_app_crash_error: "خطایی در برنامه رخ داده است! لطفا صفحه را از نو باز کنید",
                refresh_page: "تازه کردن صفحه",
                ok: "تایید",
                search: "جستجوی پیام",
                search_user: "جستجوی اعضا",
                search_no_result: "نتیجه‌ای پیدا نشد.",
                save_changes: "ذخیره",
                abort: "انصراف",
                add: "افزودن",
                for: "برای",
                start: "شروع",
                about: "برای شروع یکی از گفتگوها را انتخاب کنید",
                channel_subscriber_singular: "عضو",
                channel_subscriber_plural: "عضو",
                group_member_singular: "عضو",
                group_member_plural: "عضو",
                purchase: "پرداخت",
                irr: "﷼",
                purchase_details: "جزئیات پرداخت",
                cost: "مبلغ",
                stickers: {
                    delete_recent_sticker_header: "حذف استیکر اخیر",
                    delete_recent_sticker_body: "آیا می خواهید این استیکر را از استیکر های اخیر خود حذف کنید؟",
                    delete: "حذف استیکر",
                    menu: {
                        send_sticker: "ارسال استیکر",
                        schedule_sticker: "زمان‌بندی ارسال استیکر",
                        delete_recent_sticker: "حذف استیکر اخیر"
                    }
                },
                new: "جدید",
                comingSoon: "به زودی",
                sending: "درحال ارسال...",
                compressing: "درحال فشرده‌سازی...",
                pendingSend: "در انتظار ارسال...",
                present: "حاضر",
                online: "برخط",
                recently: "اخیرا اینجا بوده",
                just_now: "کمتر از 1 دقیقه پیش اینجا بوده",
                last_minutes: "{minutes} دقیقه پیش اینجا بوده",
                last_online_at: "ساعت {time} اینجا بوده",
                last_online_yesterday_at: "دیروز ساعت {time} اینجا بوده",
                last_online_week_date_at: "{weekday} {day} {month} اینجا بوده",
                last_online_date_at: "{day} {month} اینجا بوده",
                last_hours: "{hours} ساعت پیش اینجا بوده",
                last_days: "{days} روز پیش اینجا بوده",
                last_week: "کمتر از یک هفته پیش اینجا بوده",
                last_month: "کمتر از یک ماه پیش اینجا بوده",
                long_time: "مدت‌ها پیش اینجا بوده",
                typing: {
                    single_member: "{name} {typing}",
                    many_members: "{name} و {size} نفر دیگر {typing}",
                    sending_messages: "درحال ارسال پیام..."
                },
                background_color_test: "تست رنگ پس‌زمینه",
                bot: "بازو",
                new_message: "پیام جدید",
                join: "پیوستن",
                membership: "عضویت",
                membership_join: "عضویت",
                see: "مشاهده",
                open: "باز کردن",
                unblock: "رفع مسدودیت",
                mute: "بی‌صدا کردن",
                unmute: "باصدا کردن",
                contact: "مخاطب",
                cancel: "انصراف",
                accept: "موافقم",
                restart: "شروع مجدد",
                messages_input_placeholder: "پیام خود را بنویسید...",
                bot_messages_input_placeholder: "پیام‌...",
                invalid_nick: "شناسه صحیح نیست.",
                no_access_to_chat: "شما به این گفتگو دسترسی ندارید.",
                input: {
                    draft_error: "پیش‌نویس پیام با خطا مواجه شد",
                    edit_long_message_error: "به دلیل طولانی بودن پیام امکان ارسال وجود ندارد.",
                    sendButton: {
                        scheduleTooltip: "دکمهٔ ارسال را نگه‌ دارید تا \xabپیام زمان‌بندی‌شده\xbb ارسال کنید.",
                        scheduleTooltipDesktop: "ماوس را روی دکمهٔ ارسال نگه‌ دارید یا کلیک راست کنید تا \xabپیام زمان‌بندی‌شده\xbb ارسال کنید."
                    }
                },
                microphone_notfound_alert: {
                    title: "میکروفن فعال نیست",
                    description: "برای ضبط صدا ابتدا میکروفون را فعال کنید."
                },
                recording_error: {
                    title: "خطای ضبط صدا",
                    description: "مشکلی در ضبط صدا به وجود آمده‌ است. دسترسی میکروفون خود را بررسی کنید."
                },
                i_got_it: "متوجه شدم",
                messageType: {
                    LOCATION: "موقعیت مکانی",
                    PURCHASE_MESSAGE: "درخواست پول",
                    PHOTO: "تصویر",
                    VOICE: "پیام صوتی",
                    VIDEO: "فیلم",
                    GIF: "گیف",
                    AUDIO: "موسیقی",
                    DOCUMENT: "فایل",
                    RECEIPT: "رسید",
                    STICKER: "استیکر",
                    ANIMATED_STICKER: "استیکر",
                    CONTACT: "مخاطب",
                    GIFT_PACKET: "پاکت هدیه",
                    GOLD_GIFT_PACKET: "پاکت هدیه طلایی",
                    CROWDFUNDING: "جمع‌سپاری مالی",
                    TEXT: "پیام",
                    TEMPLATE_MESSAGE: "پیام",
                    TEMPLATE_MESSAGE_RESPONSE: "پیام",
                    SERVICE: "پیام",
                    PREMIUM: "محتوای ویژه",
                    UNSUPPORTED: "پیام",
                    DELETED: "پیام حذف‌شده",
                    ORDER: "قبض",
                    ALBUM: "آلبوم",
                    POLL: "نظرسنجی"
                },
                contactMessage: {
                    seeProfile: "مشاهدهٔ پروفایل",
                    addContact: "افزودن به مخاطبین",
                    sendMessage: "ارسال پیام",
                    add: "افزودن",
                    message: "پیام"
                },
                messagesError: {
                    cannot_process_audio: "مشکلی در پردازش صوت به وجود آمده است. لطفا نسخه‌ی خود را به‌روز کنید و دوباره تلاش کنید."
                },
                messageMenu: {
                    delete: "حذف",
                    reply: "پاسخ",
                    edit: "ویرایش",
                    forward: "بازارسال",
                    view_replies: "نمایش پاسخ‌ها",
                    select: "انتخاب",
                    forwardToMe: "فضای شخصی",
                    copyLink: "رونوشت پیوند پیام",
                    like: "پسند",
                    unlike: "حذف پسند",
                    copy: "رونوشت",
                    copy_link: "رونوشت پیوند",
                    copy_card_number: "رونوشت شماره کارت",
                    copy_transcript: "رونوشت متن پیام صوتی",
                    copy_transcript_success: "رونوشت متن پیام صوتی انجام شد.",
                    copy_voice_message: "رونوشت توضیح پیام صوتی",
                    paste: "الصاق",
                    pin: "سنجاق کردن",
                    unPin: "برداشتن سنجاق",
                    save: "ذخیره",
                    start_call: "شروع تماس",
                    join_call: "اضافه شدن به تماس",
                    add_to_gifs: "افزودن به گیف‌ها",
                    share: "اشتراک گذاری",
                    retract_vote: "لغو نظر",
                    close_poll: "متوقف‌کردن نظرسنجی",
                    send_now: "ارسال همین الان",
                    reschedule: "زمان‌بندی مجدد",
                    delete_scheduled_message_title: "حذف پیام زمان‌بندی‌شده",
                    delete_scheduled_message_description: "آیا از حذف این پیام زمان‌بندی‌شده اطمینان دارید؟",
                    resend: "ارسال مجدد"
                },
                supportContextMenu: {
                    copy_value: "رونوشت شناسه کانال مبدا",
                    success_copy: "رونوشت ID کانال مبدا انجام شد.",
                    copy_sticker_value: "رونوشت شناسه استیکر پک",
                    success_sticker_copy: "رونوشت شناسه استیکر پک انجام شد."
                },
                editor: {
                    bold: "متن برجسته",
                    italic: "متن کج",
                    check_box: "ایجاد لیست",
                    create_link: "ایجاد پیوند",
                    create_link_modal: {
                        title: "ایجاد پیوند",
                        description: "پیوند خود را برای متن انتخاب‌شده وارد کنید.",
                        text_field_label: "پیوند",
                        text_field_placeholder: "پیوند خود را وارد کنید...",
                        confirm_text_button: "ایجاد پیوند",
                        cancel_text_button: "انصراف"
                    }
                },
                download_errors: {
                    banned_file: "این محتوا مسدود شده و امکان دانلود وجود ندارد."
                },
                dialogMenu: {
                    mute: "بی‌صدا کردن",
                    unmute: "باصدا کردن",
                    marked_as_unread: "پیام خوانده‌نشده",
                    marked_as_read: "خواندن پیام",
                    archive: "بایگانی کردن",
                    unarchive: "خروج از بایگانی",
                    delete: "حذف گفتگو",
                    delete_block_bot: "حذف و مسدود کردن",
                    group_deleted: "گروه حذف شد.",
                    channel_deleted: "کانال حذف شد.",
                    dialogs_deleted: "گفتگوها حذف شدند.",
                    dialog_deleted: "گفتگو حذف شد.",
                    pin: "سنجاق کردن گفتگو",
                    profile: "نمایش پروفایل",
                    clear_history: "پاک کردن تاریخچه",
                    unPin: "برداشتن سنجاق",
                    add_to_folder: "افزودن به پوشه‌",
                    remove_from_folder: "حذف از پوشه",
                    leave_group: "ترک {groupType}",
                    leave_delete_group: "ترک و حذف {groupType}",
                    delete_confirm: "آیا از حذف گفتگو اطمینان دارید؟",
                    block: "مسدود کردن",
                    leave_delete_confirm: "آیا از ترک و حذف گفتگو اطمینان دارید؟",
                    leave_channel_confirm: "آیا از ترک کانال اطمینان دارید؟",
                    delete_error: "حذف گفتگوی موردنظر با خطا مواجه شد.",
                    leave_channel_owner_warning: "شما مالک {groupType} هستید؛ در صورت حذف {groupType}، این {groupType} برای تمام اعضا حذف خواهد شد. می‌توانید با انتقال مالکیت به یکی از مخاطبین خود، از حذف {groupType} برای سایرین جلوگیری کنید.",
                    suggestedForYou: "پیشنهاد برای شما",
                    no_unread_dialogs: "گفتگوی خوانده‌نشده‌ای ندارید."
                },
                folder: {
                    add_to_folder: "افزودن به پوشه‌",
                    add_new_folder: "افزودن پوشه‌ جدید",
                    add_folder: "افزودن پوشه‌"
                },
                archive: {
                    folderName: "بایگانی‌شده",
                    archiveDialogs: "گفتگو‌های بایگانی‌شده",
                    archived: "گفتگو بایگانی شد.",
                    archivedPlural: "گفتگوها بایگانی شدند.",
                    unarchived: "گفتگو از بایگانی خارج شد.",
                    unarchivedPlural: "گفتگوها از بایگانی خارج شدند.",
                    undo: "بازگردانی",
                    menu: {
                        minimize: "کوچک‌نمایی",
                        maximize: "بزرگنمایی",
                        goToProfile: "انتقال به پروفایل",
                        backToDialogs: "بازگشت به بخش گفتگوها",
                        howItWorks: "بایگانی چطور کار می‌کند؟"
                    },
                    info: {
                        title: "گفتگوهای بایگانی‌شده",
                        description: "بایگانی به شما اجازه می‌دهد گفتگو‌هایی را که نمی‌خواهید در صفحهٔ اصلی ببینید، بدون حذف کردن، پنهان کنید.\nدرصورت دریافت پیام جدید، گفتگو‌های بی‌صدا در بایگانی باقی می‌مانند و گفتگوهای صدادار در پیش‌نمایش گفتگوی بایگانی‌شده نمایش داده می‌شود.",
                        understood: "متوجه شدم"
                    }
                },
                tabMenu: {
                    delete_folder: "حذف پوشه",
                    edit_folder: "ویرایش پوشه",
                    disable_folder: "غیرفعال کردن پوشه"
                },
                pin: {
                    forbid_operation: "حداکثر {count} گفتگو قابل سنجاق است.",
                    private: {
                        remove_all_title: "برداشتن‌ سنجاق‌ پیام‌ها",
                        remove_all_desc: "آیا از برداشتن سنجاق برای همه‌ پیام‌ها اطمینان دارید؟"
                    }
                },
                userProfile: "پروفایل کاربری",
                bottom_menu: {
                    dialogs: "گفتگوها",
                    contacts: "مخاطبین"
                },
                messages: {
                    gift: "پاکت هدیه"
                },
                service: a.P.service,
                loginـs: {
                    bam_login_requested: "درخواست ورود به بام"
                },
                member: "عضو",
                emojis: "ایموجی‌ها",
                stcikers: "استیکرها",
                emojiPanel: {
                    rtl: !0,
                    search: "جستجو",
                    search_no_results_1: "اوه نه!",
                    search_no_results_2: "این ایموجی یافت نشد",
                    pick: "یک ایموجی انتخاب کنید",
                    add_custom: "ایموجی سفارشی اضافه کنید",
                    categories: {
                        activity: "فعالیت‌ها",
                        custom: "سفارشی",
                        flags: "پرچم‌ها",
                        foods: "‌غذا و نوشیدنی‌ها",
                        frequent: "اموجی‌های اخیر",
                        nature: "حیوانات و طبیعت",
                        objects: "اشیا",
                        people: "اموجی و افراد",
                        places: "مکان‌ها",
                        search: "نتایج جستجو",
                        symbols: "نمادها"
                    },
                    skins: {
                        choose: "رنگ پوسته پیش‌فرض را انتخاب کنید",
                        1: "پیش‌فرض",
                        2: "روشن",
                        3: "میانه-روشن",
                        4: "میانه",
                        5: "میانه-تاریک",
                        6: "تاریک"
                    }
                },
                emoji: {
                    heart: "پسند",
                    like: "موافقت",
                    dislike: "مخالفت",
                    laugh: "خنده",
                    cry: "گریه",
                    perfect: "عالی",
                    thanks: "تشکر",
                    iran: "ایران",
                    palestine: "فلسطین",
                    flower: "گل",
                    heart_eyes: "چشم قلب",
                    proud: "افتخار",
                    scared: "ترس و وحشت",
                    angry: "عصبانی",
                    poker_face: "خنثی و بی تفاوت",
                    mind_blowing: "متعجب",
                    celebrate: "شادی",
                    clap: "تشویق",
                    pray: "دعا",
                    fire: "آتش",
                    check: "تایید",
                    sad: "ناراحت",
                    black_heart: "قلب مشکی",
                    melting_face: "صورت لغزان",
                    saluting: "اطاعت",
                    rolling_on_the_floor_laughing: "افتاده بر روی زمین از خنده",
                    beaming_face_with_smiling_eyes: "پوزخند زدن",
                    smiling_face_with_tear: "خندان با اشک شادی",
                    smiling_face_with_halo: "صورت خندان با حلقه نور",
                    slightly_smiling_face: "صورت کمی خندان",
                    upside_down_face: "صورت وارونه",
                    winking_face: "چشمک",
                    smiling_face_with_hearts: "خجالت‌زده",
                    nerd_face: "درسخوان",
                    star_struck: "صورت درخشان",
                    confused_face: "گیج شده",
                    pleading_face: "چهره ملتمسانه",
                    face_with_rolling_eyes: "نگاه به بالا",
                    face_with_medical_mask: "صورت ماسک زده",
                    alien_monster: "فصایی هیولا",
                    rasing_hands: "تسلیم",
                    handshake: "توافق",
                    eyes: "چشم‌ها",
                    man_facepalming: "ای وای",
                    new_moon_face: "صورت شب",
                    full_moon_face: "صورت روز",
                    earth: "کره زمین",
                    snowman: "آدم برفی",
                    birthday_cake: "کیک تولد",
                    trophy: "جام",
                    football: "توب فوتبال",
                    high_voltage: "ولتاژ بالا",
                    dove: "پرنده",
                    party_popper: "بمب کاغذ رنگی",
                    clown_face: "دلقک",
                    hundred: "صد امتیاز",
                    ghost: "روح",
                    pill: "کپسول",
                    unicorn: "اسب تک شاخ",
                    broken_heart: "قلب شکسته",
                    heart_on_fire: "قلب در آتش",
                    lebanon_flag: "لبنان",
                    moai: "کاکا سنگی"
                },
                dialogsTabs: {
                    0: "همه",
                    1: "شخصی",
                    2: "گروه",
                    3: "کانال",
                    4: "بازو",
                    callLog: "تماس",
                    10: "خوانده‌نشده"
                },
                forward: {
                    forward_hint: "بازارسال به...",
                    select_user_to_forward: "برای بازارسال پیام حداقل یک مخاطب را انتخاب کنید.",
                    place_holder: "جستجوی مخاطب، گروه، کانال و نام‌کاربری...",
                    caption_placeholder: "نوشتن توضیحات...",
                    send_to_saved_message: "ارسال پیام به خودتان",
                    message: "پیام",
                    post: "پست",
                    success: {
                        single_msg_single_peer: "{unit} به {title} بازارسال شد.",
                        multiple_msg_single_peer: "{unit}‌ها به {title} بازارسال شد.",
                        single_msg_multiple_peer: "{unit} به {count} گفتگو بازارسال شد.",
                        multiple_msg_multiple_peer: "{unit}ها به {count} گفتگو بازارسال شد.",
                        single_msg_to_me: "{unit} به فضای شخصی بازارسال شد.",
                        multiple_msg_to_me: "{unit}‌ها به فضای شخصی بازارسال شد."
                    },
                    empty: {
                        no_channel: "امکان بازارسال فقط به کانال‌های که در آن مدیر یا مالک هستید وجود دارد.",
                        no_group: "امکان بازارسال به گروه‌‌ها وجود ندارد.",
                        no_bot: "امکان بازارسال به بازوها وجود ندارد.",
                        no_dialog: "گفتگویی برای بازارسال وجود ندارد."
                    }
                },
                anonymous_contact: {
                    phone_number: "شماره همراه:",
                    reg_date: "تاریخ ثبت‌نام:",
                    rename_date: "تغییر نام:",
                    photo_date: "تغییر عکس پروفایل:",
                    common_groups: "گروه مشترک:",
                    group_count: "{value} گروه",
                    verified: "این یک حساب رسمی است.",
                    not_verified: "این یک حساب رسمی نیست.",
                    modal: {
                        common_groups: "گروه‌های مشترک"
                    }
                },
                falake: {
                    open_unknown_link: "باز کردن پیوند ناشناخته",
                    scam_link: "پیوند‌ کلاهبرداری",
                    unknown_link_description: "آیا از باز کردن این پیوند اطمینان دارید؟ این پیوند خارج از بله است و ممکن است ایمن نباشد.",
                    scam_link_description: "دسترسی به این پیوند امکان‌پذیر نیست. این پیوند کلاهبرداری یا مخرب شناسایی‌شده و برای حفاظت از شما مسدود شده است.",
                    open_link: "باز کردن پیوند",
                    confirm_text: "متوجه شدم",
                    open_link_description: "آیا از باز کردن این پیوند اطمینان دارید؟"
                },
                you: "شما",
                internet: "اینترنت",
                recent_dialogs: "گفتگوهای اخیر",
                report_message: {
                    report_inappropriate: "گزارش",
                    inappropriate: "محتوای نامناسب",
                    violence: "ترویج خشونت",
                    spam: "هرزنامه",
                    violence_content: "محتوای حاوی ترویج خشونت",
                    report_fraud: "گزارش کلاهبرداری",
                    report: "گزارش {type}",
                    fraud: "کلاهبرداری",
                    fraud_content: "محتوای کلاهبرداری",
                    nsfw: "محتوای غیر اخلاقی",
                    incorrect_info: "اطلاعات نادرست",
                    other: "سایر موارد",
                    send: "ارسال گزارش",
                    can_desc: "می‌توانید جزییات بیشتری در رابطه با گزارش خود وارد کنید.",
                    should_desc: "لطفا‌ جزییات بیشتری در رابطه با گزارش خود وارد کنید.",
                    desc_label: "جزییات بیشتر",
                    desc_place_holder: "گزارش خود را بنویسید...",
                    error: "ارسال گزارش با خطا مواجه شد.",
                    success: "گزارش با موفقیت ارسال شد.",
                    report_messages: "گزارش پیام‌ها",
                    select_at_least_one: "برای گزارش حداقل یک پیام انتخاب کنید."
                },
                drawer: {
                    profile: "حساب کاربری",
                    report_problem: "گزارش خطا",
                    support: "پشتیبانی",
                    setting: "تنظیمات",
                    faq: "سوالات متداول",
                    bale_guide: "کانال راهنمای بله",
                    version: "نسخهٔ ",
                    update: "به‌روزرسانی",
                    save_logs: "ذخیره‌ لاگ‌ها",
                    save_push_logs: "ذخیره‌ لاگ‌های پوش",
                    create_group: "ساخت گروه",
                    create_channel: "ساخت کانال"
                },
                drawer_setting: r.K,
                service_worker: {
                    update_error: "مشکلی در دریافت نسخه جدید به وجود آمد."
                },
                bug_report_modal: {
                    hint: "در صورت مشاهدهٔ مشکل یا نقص عملکرد،‌ می‌توانید با گزارش آن در این فرم، به ما در بهبود \xabوب اپلیکیشن بله\xbb کمک کنید.",
                    title: "عنوان",
                    description: "...توضیحات",
                    date: "زمان حدودی بروز اشکال",
                    send: "ارسال گزارش",
                    done: "گزارش خطا ارسال شد"
                },
                file_size: {
                    mb: "مگابایت",
                    kb: "کیلوبایت",
                    b: "بایت"
                },
                description: "توضیحات...",
                copy_done: "رونوشت پیام انجام شد.",
                copy_messages_done: "رونوشت پیام‌ها انجام شد.",
                copy_link_done: "رونوشت پیوند پیام انجام شد.",
                copy_card: "رونوشت شماره کارت انجام شد.",
                copy_link: "رونوشت پیوند انجام شد.",
                copy_receipt_done: "رونوشت رسید انجام شد.",
                copy_username: "نام کاربری رونوشت ‌شد.",
                copy_phonenumber: "شماره همراه رونوشت ‌شد.",
                copy_group_id: "شناسهٔ {groupType} رونوشت ‌شد.",
                copy_text: "رونوشت متن با موفقیت انجام شد.",
                forward_to_me_done: "پیام در فضای شخصی ذخیره شد.",
                maximum_selected_message: "حداکثر {count} پیام قابل انتخاب هست",
                maximum_selected_contacts: "حداکثر {count} مخاطب قابل انتخاب هست",
                unsupported_message_description: "درحال حاضر نمایش این پیام پشتیبانی نمی‌شود.",
                saved_messages: "فضای شخصی",
                deleted_account: "حساب پاک‌شده",
                deleted_group: "گروه پاک‌شده",
                deleted_channel: "کانال پاک‌شده",
                user: "کاربر",
                messages_search: {
                    title: "جستجوی پیام",
                    new_title: "جستجو برای پیام",
                    empty_state_text: "جستجوی پیام در {name}",
                    title_found_old_messages: "نتایج آخرین جستجو",
                    messages_found: "{count} پیام یافت شد",
                    not_found_messages: "نتیجه‌ای یافت نشد",
                    search_in: "جستجوی {query} در {name}",
                    message_has_been_deleted: "این پیام حذف شده است",
                    message_has_been_deleted2: "این پیام حذف شده است!",
                    result_list: "لیست نتایج",
                    chat: "صفحهٔ گفتگو",
                    result_number_from: "{from} از {total} نتیجه",
                    total_result_count: "{total} نتیجه",
                    result: "{total} نتیجه",
                    result_count: "تعداد نتایج جستجو",
                    search: "جستجو",
                    date: "تاریخ",
                    before: "به قبل",
                    message_double_dates_selected: "امکان انتخاب دو تاریخ به‌صورت همزمان وجود ندارد.",
                    message_double_user_selected: "امکان انتخاب دو کاربر به صورت همزمان وجود ندارد.",
                    search_ran_into_problem: "جستجو با مشکل مواجه شد.",
                    date_picker_title: "انتخاب تاریخ"
                },
                sidebar_search: {
                    tab_all: "همه",
                    tab_channel: "کانال",
                    tab_bot: "بازو",
                    message_scope_all: "همه پیام‌ها",
                    message_scope_private: "پیام‌های شخصی",
                    message_scope_channel: "کانال‌ها",
                    message_scope_group: "گروه‌ها",
                    no_results: "نتیجه‌ای پیدا نشد.",
                    placeholder: "جستجوی کانال، گروه و پیام...",
                    flowPlaceholder: "جستجوی محتوا، تصویر و کانال",
                    global: "جستجوی سراسری",
                    dialogs: "گفتگوها",
                    recentPeer: "جستجوهای اخیر",
                    messages: "پیام‌ها",
                    dialogs_contacts: "گفتگوها و مخاطبین",
                    channels: "کانال‌ها",
                    bots: "بازوها",
                    my_channels: "کانال‌های من",
                    suggested_channels: "کانال‌های پیشنهادی",
                    suggested_bots: "بازوهای پیشنهادی",
                    show_less: "نمایش کمتر",
                    show_more: "نمایش بیشتر",
                    globalSearch: {
                        globalGroups: "جستجوی سراسری گروه",
                        globalChannels: "جستجوی سراسری کانال",
                        globalBots: "جستجوی سراسری بازو",
                        globalUsers: "جستجوی سراسری افراد",
                        globalPeers: "جستجوی سراسری گفتگو"
                    },
                    deleteRecentModal: {
                        title: "حذف",
                        titleAll: "حذف همه",
                        description: "آیا از حذف این جستجو اطمینان دارید؟",
                        descriptionAll: "آیا از حذف همهٔ جستجوهای اخیر اطمینان دارید؟"
                    },
                    topPeerModal: {
                        title: "حذف پیشنهاد",
                        description: "آیا از حذف \xab{title}\xbb از پیشنهادها اطمینان دارید؟"
                    },
                    GroupRecommendations: {
                        description: "شما می‌توانید گروه خود را برای معرفی عمومی در \xabبله\xbb ثبت کنید.",
                        button: "ثبت گروه",
                        title: "گروه‌های پیشنهادی"
                    }
                },
                flow_search: {
                    channel: "کانال",
                    content: "محتوا",
                    see_all_result: "مشاهدۀ همۀ نتایج",
                    member: "عضو",
                    deleteRecentModal: {
                        title: "حذف",
                        titleAll: "حذف همه",
                        description: "آیا از حذف این جستجو اطمینان دارید؟",
                        descriptionAll: "آیا از حذف همهٔ جستجوهای اخیر اطمینان دارید؟"
                    },
                    tooltip: {
                        text: "جستجوی محتوا، تصویر و کانال"
                    }
                },
                editted: "ویرایش شده",
                baje_profile: {
                    defaultName: "کاربر محترم",
                    welcome: "به باجه خوش آمدید",
                    complete_profile: "لطفا پروفایل خود را تکمیل کنید",
                    new_request: "ثبت سوال جدید",
                    archived_requests: "لیست سوالات بررسی شده",
                    close: "بستن"
                },
                chat: {
                    inputbar: {
                        not_mebmer: "عضو نیستید"
                    }
                },
                peer_toolbar: {
                    clear_history: "پاک کردن تاریخچه",
                    statistics: "آمار",
                    leave: "ترک",
                    leave_delete: "ترک و حذف کانال",
                    clear_history_confirm: "آیا از حذف پیام‌های گفتگو اطمینان دارید؟",
                    add_contact: "افزودن به مخاطبین",
                    block: "مسدود کردن",
                    unknownPeer: {
                        user: {
                            info: "آیا \xab{name}\xbb را می‌شناسید؟",
                            confirm_btn: "افزودن به مخاطبین",
                            reject_btn: "مسدود کردن",
                            report_reject_btn: "مسدود و گزارش‌دادن",
                            block_modal: {
                                title: "مسدود کردن",
                                description: "آیا از مسدود کردن \xab{name}\xbb اطمینان دارید؟",
                                checkbox: "گزارش کاربر"
                            }
                        },
                        group: {
                            info: "شما توسط \xab{name}\xbb به \xab{type}\xbb دعوت شده‌اید، \xab{name}\xbb جزء مخاطبین شما نیست.",
                            info_channel: "شما توسط شخصی که جزء مخاطبین شما نیست به کانال دعوت شده‌اید.",
                            confirm_btn: "پذیرفتن دعوت",
                            reject_btn: "ترک {type}",
                            report_reject_btn: "ترک و گزارش‌دادن",
                            block_modal: {
                                title: "ترک {type}",
                                description: "آیا از ترک و حذف {type} اطمینان دارید؟",
                                checkbox: "گزارش {type}"
                            }
                        },
                        bot: {
                            info: "اگر تمایل ندارید از \xab{name}\xbb پیام دریافت کنید، می‌توانید آن را مسدود کنید.",
                            confirm_btn: "متوجه شدم",
                            reject_btn: "مسدود کردن بازو",
                            block_modal: {
                                title: "مسدود کردن",
                                description: "آیا از مسدود کردن \xab{name}\xbb اطمینان دارید؟",
                                checkbox: "ارسال گزارش محتوای نامناسب برای بازو",
                                cancel: "انصراف"
                            }
                        }
                    },
                    block_report: "مسدود و گزارش‌دادن",
                    do_you_know_user: "آیا \xab{name}\xbb را می‌شناسید؟",
                    report_private_success: "گزارش با موفقیت ارسال و کاربر مسدود شد.",
                    report_group_success: "گزارش با موفقیت ارسال و گروه حذف شد.",
                    block_modal: {
                        title: "مسدود کردن",
                        description: "آیا از مسدود کردن \xab{name}\xbb اطمینان دارید؟",
                        checkbox: "گزارش کاربر",
                        confirm: "مسدود کردن"
                    }
                },
                fale_hafez: {
                    title: "فال حافظ",
                    confirm: "فال بگیر",
                    cancel: "الان نه",
                    description: "برای \xab{name}\xbb فال بگیر. ",
                    caption: "به فال نیک بگیر! \uD83D\uDE0A"
                },
                profile: {
                    user: {
                        details: {
                            phone: "شماره همراه",
                            userName: "نام کاربری",
                            bio: "دربارهٔ من",
                            nick_placeholder: "نام کاربری خود را وارد کنید",
                            bio_placeholder: "دربارهٔ خودتان بنویسید"
                        },
                        phone_number_context_menu: {
                            copy_phone_number: "رونوشت شماره همراه",
                            change_phone_number: "تغییر شماره همراه"
                        },
                        menu: {
                            editName: "ویرایش نام مخاطب",
                            block: "مسدود کردن مخاطب",
                            delete: "حذف مخاطب",
                            unBlock: "رفع مسدودیت",
                            addContact: "افزودن به مخاطبین"
                        },
                        editName: {
                            name: "نام"
                        },
                        blockModal: {
                            title: "مسدود کردن مخاطب",
                            desc: "آیا از مسدود کردن مخاطب اطمینان دارید؟",
                            confirm: "مسدود کردن کاربر"
                        },
                        unBlock: {
                            title: "رفع مسدودیت کاربر",
                            desc: "آیا از رفع مسدودیت کاربر اطمینان دارید",
                            confirm: "رفع مسدودیت"
                        },
                        deleteContact: {
                            title: "حذف مخاطب",
                            desc: "آیا از حذف کردن مخاطب اطمینان دارید؟",
                            confirm: "حذف مخاطب"
                        },
                        errors: {
                            invalid_name: "نام انتخابی شما مورد قبول نیست."
                        }
                    },
                    bot: {
                        details: {
                            phone: "شماره همراه",
                            userName: "نام کاربری",
                            bio: "توضیحات"
                        },
                        menu: {
                            block: "مسدود و حذف کردن",
                            editName: "ویرایش نام",
                            delete: "حذف",
                            unBlock: "رفع مسدودیت",
                            addContact: "افزودن به مخاطبین",
                            termsAndConditions: "شرایط و قوانین بازو"
                        },
                        blockModal: {
                            block: "مسدود کردن",
                            desc_with_username: "آیا از مسدود کردن بازوی \xab{username}\xbb اطمینان دارید؟",
                            desc_without_username: "آیا از مسدود کردن بازو اطمینان دارید؟",
                            delete_chat: "حذف گفتگو"
                        },
                        editName: {
                            name: "نام"
                        },
                        unBlock: {
                            title: "رفع مسدودیت بازو",
                            desc: "آیا از رفع مسدودیت بازو اطمینان دارید؟",
                            confirm: "رفع مسدودیت"
                        },
                        deleteContact: {
                            title: "حذف",
                            desc: "آیا از حذف کردن بازو اطمینان دارید",
                            confirm: "حذف"
                        },
                        addGroupButton: {
                            description: "با افزودن این بازو، می‌توانید گروه و کانال خود را مدیریت کنید.",
                            textButton: "افزودن بازو به گروه و کانال",
                            modalTitle: "انتخاب گفتگو",
                            myGroups: "گروه‌های من",
                            myChannels: "کانال‌های من",
                            groups: "گروه ها",
                            toastText: "بازو \xabمدیریتی\xbb به گروه اضافه شد."
                        }
                    },
                    group: {
                        type: "گروه",
                        desc: "توضیحات",
                        members: "اعضای گروه",
                        userName: "شناسهٔ {groupType}",
                        add_new_user: {
                            title: "افزودن عضو جدید",
                            small_title: "افزودن",
                            add_via_link: "دعوت به {groupType} از طریق لینک",
                            search_placeholder: "جستجوی عضو جدید..."
                        },
                        suspended: "{type} به علت گزارش کاربران موقتا متوقف شده است.",
                        suspended_alert: "گروه از دسترس خارج شد",
                        suspended_desc: "گروه \xab{name}\xbb با توجه به گزارش کاربران و بررسی‌های انجام شده،  ",
                        suspended_reason: "به علت انتشار ",
                        suspended_desc_deleted: " غیر فعال شده است.",
                        choose_owner: "انتخاب مالک",
                        delete_after_transfer_ownership: "مالکیت به {name} انتقال یافت اکنون می‌توانید گروه را ترک کنید.",
                        search_admin: "جستجوی مدیر...",
                        leave_peer_group: "ترک {groupType}",
                        set_user_permissions: {
                            title: "تنظیم مجوز اعضا",
                            header1: "مجوز اعضا",
                            header2: "مجوز عضو",
                            label1: "اعضای گروه دسترسی به چه کارهایی داشته باشند؟",
                            label2: "استثنا",
                            label3: "این عضو دسترسی به چه کارهایی داشته باشد؟",
                            send_message: "ارسال پیام",
                            send_multimedia: "ارسال چند رسانه‌ای",
                            send_media: "ارسال رسانه",
                            send_gif_sticker: "ارسال استیکر و گیف",
                            send_stickers: "ارسال استیکر",
                            pin_message: "سنجاق پیام",
                            edit_group_info: "ویرایش اطلاعات گروه",
                            edit_channel_info: "ویرایش اطلاعات کانال",
                            edit_channel_message: "ویرایش پیام‌های دیگران",
                            delete_channel_message: "حذف پیام‌های دیگران",
                            delete_group_message: "حذف پیام های گروه",
                            add_story: "افزودن ماجرا",
                            delete_message: "حذف پیام",
                            edit_permissions: "ویرایش مجوزها",
                            see_permissions: "مشاهده‌ی مجوزها",
                            add_member: "افزودن اعضا",
                            add_admin: "افزودن مدیر جدید",
                            see_members: "نمایش اعضا",
                            kick_user: "حذف اعضا",
                            start_call: "شروع تماس",
                            manage_call: "مدیریت تماس",
                            add_exception: "افزودن استثنا",
                            confirm_text: "ثبت تغییرات",
                            success: "تغییرات با موفقیت انجام شد.",
                            confirmation: "شما تغییراتی را در این صفحه داشته‌اید، آیا مایل به ثبت تغییرات هستید؟",
                            add_admin_success: "\xab{username}\xbb مدیر شد.",
                            set_permissions: "تعیین مجوز",
                            search: "جستجو...",
                            back: "بازگشت",
                            exit: "خروج",
                            remove_exception: "حذف از لیست استثنا",
                            your_permissions: "دسترسی‌های شما",
                            change_own_permissions_not_allowed: "امکان ویرایش مجوزهای یک مدیر توسط خودش وجود ندارد.",
                            more_than_default_not_possible: "این مجوز برای همهٔ اعضا گروه غیرفعال است. شما می‌توانید این مجوز را از قسمت \xabمجوز اعضا\xbb گروه فعال کنید.",
                            admin: {
                                choose_admin: "انتخاب مدیر جدید",
                                add_admin: "افزودن مدیر",
                                header: "مجوز مدیر",
                                permission: "این مدیر دسترسی به چه کارهایی داشته باشد؟",
                                error: "شما این مجوز را ندارید."
                            },
                            errors: {
                                general: "در تنظیم مجوزها خطایی پیش آمد.",
                                not_allowed_in_public_group: "امکان تنظیم این مجوز در گروه‌های عمومی وجود ندارد.",
                                making_admin: "در مدیر کردن عضو خطایی پیش آمد."
                            },
                            exception_description: "همه مجوزها به جز {permissions}"
                        },
                        menu: {
                            reaction_management: "تنظیمات واکنش",
                            edit: "ویرایش پروفایل گروه",
                            link: "لینک گروه",
                            leave: "ترک گروه",
                            remove: "ترک و حذف گروه",
                            kick: "حذف از گروه",
                            makeAdmin: "ارتقا به مدیر",
                            removeAdmin: "برکناری از مدیر",
                            removeAdminNew: "حذف از مدیران {type}",
                            transferOwner: "انتقال مالکیت"
                        },
                        warn_excepted_admin: {
                            body: "با انتخاب این کاربر به عنوان مدیر، از لیست استثنا حذف می‌شود.",
                            confirm: "تایید و ادامه",
                            cancel: "انصراف"
                        },
                        link: {
                            title: "لینک {groupType}",
                            desc: "افراد می‌توانند با استفاده از این لینک به گروه شما بپیوندند و شما می‌توانید لینک را در هر زمانی باطل کنید.",
                            new_link: "ایجاد پیوند جدید و ابطال پیوند قبلی",
                            depricate_link: "باطل کردن پیوند",
                            copy_done: " لینک گروه رونوشت ‌شد.",
                            depricate_sure: "آیا از باطل کردن پیوند مطمئن هستید؟"
                        },
                        tabs: {
                            members: "اعضا",
                            pics: "تصاویر",
                            videos: "ویدیوها",
                            docs: "فایل‌ها",
                            voices: "صوت‌ها",
                            music: "موسیقی‌ها",
                            links: "پیوندها",
                            groups: "گروه‌های مشترک"
                        },
                        leaveGroup: {
                            title: "ترک گروه",
                            desc: "آیا از ترک گروه اطمینان دارید؟",
                            confirm: "ترک"
                        },
                        removeGroup: {
                            title: "حذف و ترک گروه",
                            desc: "آیا از حذف و ترک گروه اطمینان دارید؟",
                            confirm: "حذف"
                        },
                        edit_profile: {
                            group_name: "نام گروه",
                            about_placeholder: "متن دربارهٔ گروه بنویسید...",
                            description: "توضیحات"
                        },
                        edit_group: "ویرایش گروه",
                        group_setting: "تنظیمات گروه",
                        group_type: {
                            title: "نوع گروه",
                            private: "گروه خصوصی",
                            public: "گروه عمومی",
                            invite_link: "لینک دعوت",
                            private_desc: "از طریق پیوند زیر افراد دیگر می‌توانند به گروه شما اضافه شوند.",
                            public_desc: "از طریق شناسهٔ‌ زیر افراد دیگر می‌توانند گروه شما را جستجو کنند.",
                            link_desc: "افراد می‌توانند با استفاده از این لینک به گروه شما بپیوندند."
                        },
                        channel_type: {
                            title: "نوع کانال",
                            private: "کانال خصوصی",
                            public: "کانال عمومی",
                            invite_link: "لینک دعوت",
                            private_desc: "با دعوت شدن یا داشتن لینک می‌توان به کانال‌های خصوصی وارد شد.",
                            public_desc: "کانال‌های عمومی در نتایج جستجو نمایش داده می‌شوند و تاریخچهٔ گفتگو برای همه قابل دسترسی است و هر کسی می‌تواند به این کانال‌ها بپیوندد.",
                            link_desc: "افراد می‌توانند با استفاده از این لینک به کانال شما بپیوندند.",
                            add_new_user: {
                                title: "افزودن عضو جدید",
                                small_title: "افزودن",
                                add_via_link: "دعوت به کانال از طریق لینک",
                                search_placeholder: "جستجوی عضو جدید..."
                            }
                        },
                        admins: {
                            title: "مدیران",
                            admins_list: "لیست مدیران",
                            add_new_admin: "افزودن مدیر جدید",
                            added_by_you: "توسط شما به مدیران اضافه شد.",
                            added: "به مدیران اضافه شد.",
                            by: "توسط",
                            owner: "مالک",
                            manager: "مدیر",
                            promoted_by: "توسط {name} به مدیران اضافه شده",
                            makeAdmin: {
                                title: "ارتقا به مدیر",
                                message: "آیا از ارتقا دادن {name} به مدیر اطمینان دارید؟"
                            }
                        },
                        users: {
                            title: "اعضا",
                            no_member: "عضوی پیدا نشد.",
                            search_member: "جستجوی اعضا",
                            show_message_from: "نمایش پیام از",
                            add_new_user: "افزودن عضو جدید",
                            invite_using_link: "دعوت به گروه از طریق لینک",
                            owner: "مالک",
                            admin: "مدیر",
                            kick: {
                                title: "حذف از {type}",
                                message: "آیا از حذف \xab{name}\xbb از {type} مطمئن هستید؟"
                            }
                        },
                        errors: {
                            make_user_owner_error: "امکان انتقال مالکیت {groupType} به \xab{name}\xbb به دلیل رسیدن به سقف مجاز وجود ندارد",
                            create_group_error: "امکان ساخت {groupType} به دلیل رسیدن به سقف مجاز وجود ندارد."
                        },
                        changeGroupTypeToastText: "گروه \xab{groupName}\xbb به گروه {groupType} تبدیل شد.",
                        groupType: {
                            public: "عمومی",
                            private: "خصوصی"
                        },
                        bot: {
                            can_see_messages: "به پیام‌ها دسترسی دارد",
                            cannot_see_messages: "به پیام‌ها دسترسی ندارد"
                        }
                    },
                    channel: {
                        type: "کانال",
                        userName: "شناسهٔ کانال",
                        suspended_alert: "کانال از دسترس خارج شد",
                        menu: {
                            transfer_owner: "انتقال مالکیت",
                            transfer_owner_confirm: "آیا از انتقال مالکیت {type} به \xab{username}\xbb  اطمینان دارید؟",
                            transfer_owner_toast: "درخواست انتقال مالکیت برای \xab{username}\xbb ارسال شد.بعد از تایید این کاربر، انتقال مالکیت {groupType} \xab{groupName}\xbb انجام می‌شود.",
                            leave: "ترک کانال",
                            remove: "ترک و حذف کانال",
                            edit: "ویرایش پروفایل کانال",
                            kick: "حذف از کانال"
                        },
                        changeChannelTypeToastText: "کانال \xab{groupName}\xbb به کانال {groupType} تبدیل شد.",
                        channel_type: {
                            title: "نوع کانال",
                            private: "کانال خصوصی",
                            public: "کانال عمومی"
                        },
                        join_channel: "پیوستن به کانال",
                        edit_channel: "ویرایش کانال",
                        channel_setting: "تنظیمات کانال",
                        leaveChannel: {
                            title: "ترک کانال",
                            desc: "آیا از ترک کانال اطمینان دارید؟",
                            confirm: "ترک"
                        },
                        edit_profile: {
                            title: "ویرایش پروفایل کانال",
                            channel_name: "نام کانال",
                            about_placeholder: "متن دربارهٔ کانال بنویسید..."
                        },
                        invite_using_link: "دعوت به کانال از طریق لینک",
                        kickUser: {
                            confirmMessage: ""
                        },
                        make_admin_confirm_message: "",
                        block_access_to_private_channel: "این کانال خصوصی است، امکان دسترسی به آن وجود ندارد."
                    },
                    my: {
                        menu: {
                            editName: "ویرایش نام",
                            exit: "خروج از حساب کاربری",
                            addNewAvatar: "افزودن عکس جدید"
                        },
                        editNick: {
                            title: "ویرایش نام کاربری",
                            inputLabel: "نام کاربری",
                            invalid: "نام کاربری نامعتبر است",
                            exist: "این نام کاربری قبلا انتخاب شده است",
                            helpText: `شما می‌توانید نام‌کاربری انتخاب کنید تا افراد بدون نیاز به شماره همراه‌‌تان، شما را پیدا کنند

        نام کاربری باید حداقل ۵ کاراکتر از حروف انگلیسی کوچک و اعداد باشد. می‌توانید بین کاراکتر‌ها از زیرخط هم استفاده.`
                        },
                        editAbout: {
                            title: "ویرایش دربارهٔ من",
                            inputLabel: "دربارهٔ من",
                            helpText: "شما می‌توانید چند خط دربارهٔ خودتان بنویسید. هرکس که پروفایل شما را مشاهده کند این متن را خواهد دید."
                        },
                        chooseAvatar: {
                            methods: {
                                takePhoto: "عکس گرفتن",
                                fromGallery: "انتخاب از گالری"
                            }
                        },
                        cropAvatarModal: {
                            title: "برش عکس"
                        },
                        leaveMultiple: {
                            title: "حذف {n} گفتگو",
                            desc: "آیا از حذف گفتگو‌های انتخاب شده مطمئن هستید؟",
                            confirm: "حذف"
                        }
                    },
                    avatar: {
                        addPhoto: "تنظیم عکس جدید",
                        removePhoto: "حذف عکس",
                        delete_profile: "حذف عکس پروفایل",
                        delete_profile_confirm: "آیا از حذف عکس پروفایل اطمینان دارید؟",
                        changed_avatar: "عکس {groupType} را تغییر دادید",
                        updaload_avatar_failed: "بارگذاری عکس با مشکل مواجه شد."
                    },
                    notifications: "اعلان‌ها",
                    uploadingPhoto: "درحال آپلود عکس..."
                },
                order_message: {
                    water: "آب",
                    electricity: "برق",
                    gas: "گاز",
                    tel: "تلفن",
                    mobile: "موبایل",
                    city: "عوارض شهرداری",
                    tax: "مالیات",
                    penalty: "جریمه",
                    general: "قبض",
                    id: "شناسه"
                },
                update: {
                    newVersion: "نسخهٔ جدید",
                    changeLog: "تغییرات نسخهٔ جدید",
                    new_changeLog_version: "تغییرات نسخهٔ جدید ({version})",
                    changeLog_version: "تغییرات نسخهٔ ({version})",
                    enter: "ورود به نسخهٔ جدید",
                    update: "به‌روز رسانی",
                    update_bale: "به‌روز رسانی \xabبله\xbb",
                    some_bugs_have_been_fixed: "رفع برخی مشکلات گزارش‌شده"
                },
                share: "اشتراک‌‌گذاری",
                save: "ذخیره",
                nav: {
                    profile: "پروفایل",
                    chats: "گفتگو",
                    story: "ماجرا",
                    contacts: "مخاطبین",
                    flow: "جریان",
                    magazine: "مجله",
                    ai: "هوش مصنوعی",
                    myBank: "بانک‌ من",
                    service: "خدمات",
                    serviceBots: "بازوها",
                    allServices: "همه خدمات"
                },
                messageBar: {
                    edit: "ویرایش پیام",
                    forwardFromOne: "بازارسال شده از {name}",
                    forwardFromMultiple: "بازارسال شده از چند نفر",
                    forwardedMessageCount: "{count} پیام بازارسال شده"
                },
                deactivated: {
                    title: "این صفحه غیرفعال شد",
                    desc: `شما صفحهٔ دیگری از \xabوب اپلیکیشن بله\xbb باز کرده‌اید
    بنابراین برای جلوگیری از مشکلات احتمالی، ما این صفحه را غیرفعال کرده‌ایم.`,
                    activate: "فعال کردن این صفحه"
                },
                status: {
                    Offline: "عدم اتصال به اینترنت",
                    isConnecting: "درحال اتصال‌...",
                    isSyncing: "درحال به‌روز رسانی‌...",
                    retry: "اتصال اینترنت خود را بررسی کرده و مجددا تلاش کنید."
                },
                purchaseMessages: {
                    desiredAmountHeader: "برای \xab{name}\xbb مبلغ دلخواهی را واریز کنید.",
                    desiredAmountLabel: "مبلغ (ریال)",
                    desiredAmount: "مبلغ دلخواه",
                    enterDesiredAmount: "وارد کردن مبلغ دلخواه",
                    desiredAmountPlaceholder: "مبلغ مورد نظر را وارد کنید"
                },
                save_to_gallery: "ذخیره در گالری",
                download: "دانلود",
                from: "از",
                copy_image: "رونوشت عکس",
                pay: "پرداخت",
                withdraw: "برداشت",
                pay_with_wallet: "پرداخت با کیف پول",
                mybank: {
                    new_bank_services: "خدمات نوین مالی",
                    bank_services: "خدمات بانکی",
                    other_services: "سایر خدمات",
                    popular_services: "خدمات پرکاربرد",
                    recomended: "پیشنهادی",
                    title: "بانک من",
                    ramzinex: "رمزینکس",
                    halalFund: "حلال‌فاند",
                    darato: "داراتو",
                    nobatgir: "نوبت‌دهی ملّی",
                    arz: "ارز مسافرتی",
                    branchId: "کد شعبه: ",
                    officeId: "کد باجه: ",
                    branchFull: "ظرفیت خرید ارز در این شعبه برای امروز به اتمام رسیده است.",
                    stateFull: "ظرفیت خرید ارز در این استان برای امروز به اتمام رسیده است.",
                    arzInquiry: "استعلام ارز",
                    about: "برای شروع یکی از خدمات را انتخاب کنید",
                    sefteh: "سفته الکترونیک",
                    baleMyBankTitle: "خدمات بانکی بله",
                    charge: "شارژ",
                    internetPackage: "بستهٔ اینترنت",
                    cardToCard: "کارت به کارت",
                    balance: "موجودی کارت",
                    bill: "قبض",
                    maskan: "تسهیلات مسکن",
                    statement: "صورت‌حساب",
                    baje: "باجه",
                    charity: "نیکوکاری",
                    transactions: "تراکنش‌ها",
                    housing: "تسهیلات مسکن",
                    pfm: "مدیریت مالی",
                    sapta: "اطلاع‌رسانی بانک ملّی",
                    club: "باشگاه \xabبله\xbb",
                    kindnessCircle: "دایره‌ی مهربانی",
                    bankdari: "بانکداری ۷/۲۴",
                    add: "افزودن",
                    recommend: {
                        title: "چرا این پیشنهاد‌ها را می‌بینید؟",
                        description: `\xabبله\xbb قصد دارد از طریق همکاری با کسب‌وکارهای دیگر، خدمات متنوع‌تری را در صفحه \xabبانک من\xbb ارائه دهد. در صورتیکه پیشنهاد یا انتقادی در این‌باره دارید، از طریق راه ارتباطی زیر با ما در میان بگذارید:`,
                        support: "پشتیبانی \xabبله\xbb: supportbot@",
                        close: "متوجه شدم"
                    }
                },
                yara: {
                    activateTransactionReceiving: "فعال‌سازی دریافت تراکنش‌ها",
                    transactionSettings: "تنظیمات تراکنش‌ها"
                },
                charge_type: {
                    direct: "شارژ مستقیم",
                    code: "کد شارژ"
                },
                rial: "ریال",
                toman: "تومان",
                dolar: "دلار",
                mili_gram: "میلی گرم",
                gram: "گرم",
                moadel: "معادل",
                more_all: "مشاهدهٔ همه",
                delete: "حذف",
                delete_all: "حذف همه",
                select_all: "انتخاب همه",
                enseraf: "انصراف",
                yes: "بله",
                no: "خیر",
                case: "مورد",
                repurchase: "خرید مجدد",
                transaction_receipt: "رسید تراکنش",
                transaction_type: "نوع تراکنش",
                date_and_time: "تاریخ و زمان",
                desired_amount: "مبلغ دلخواه",
                charge_kind: {
                    normal: "شارژ معمولی",
                    amazing: "شارژ شگفت‌انگیز"
                },
                see_all: "مشاهدهٔ همه",
                operators: {
                    irancell: {
                        name: "ایرانسل"
                    },
                    hamrah: {
                        name: "همراه اول"
                    },
                    rightel: {
                        name: "رایتل"
                    },
                    td_lte: {
                        name: "TD-LTE"
                    }
                },
                receipt: {
                    charge_code: "کد شارژ",
                    charge_code_copy_text: "کد شارژ رونوشت شد"
                },
                wrong_phonenumber: "شماره همراه اشتباه وارد شده است.",
                phonenumber_is_required: "وارد کردن شماره همراه الزامی است.",
                phonenumber_is_not_complete: "شماره همراه را کامل وارد کنید.",
                phonenumber_start_with_09_9: "شماره همراه با ۰۹ یا ۹ شروع می شود.",
                select_from_contacts: "انتخاب از مخاطبین",
                delete_orders: {
                    title: "حذف {type}",
                    single: "آیا از حذف {type} اطمینان دارید؟",
                    multiple: "آیا از حذف همه {type} اطمینان دارید؟",
                    charge: "شارژ",
                    internet: "اینترنت",
                    type_charge_single: "شارژ",
                    type_charge_multiple: "شارژها",
                    type_internet_single: "بسته اینترنت",
                    type_internet_multiple: "بسته اینترنت‌ها"
                },
                attachment: {
                    title: "انتخاب...",
                    types: {
                        file: "فایل",
                        media: "عکس و ویدیو",
                        location: "موقعیت مکانی",
                        poll: "نظرسنجی",
                        gold_gift_pocket: "پاکت هدیه طلایی",
                        gift_pocket: "پاکت هدیه",
                        send_crowdfunding: "ایجاد پویش جمع سپاری",
                        send_request_money: "درخواست پول",
                        card_to_card: "کارت به کارت",
                        crowdfunding: "جمع سپاری مالی"
                    },
                    modals: {
                        photo: "ارسال عکس",
                        video: "ارسال ویدیو",
                        gif: "ارسال گیف",
                        photo_video: "ارسال عکس و فیلم",
                        file: "ارسال فایل",
                        location: "ارسال موقعیت مکانی",
                        add_photo: "افزودن عکس",
                        add_media: "افزودن عکس و فیلم",
                        send_album: "ارسال به صورت آلبومی",
                        send_as_file: "ارسال به‌صورت فایل",
                        send_none_album: "ارسال به‌صورت غیرآلبومی",
                        crop_image: "برش عکس",
                        see_preview: "مشاهدهٔ پیش‌نمایش",
                        selected_number: "{count} مورد انتخاب شده",
                        send_poll: "ارسال نظرسنجی"
                    },
                    labelVideo: "توضیحات این فیلم",
                    labelPhoto: "توضیحات این عکس",
                    labelDoc: "توضیحات فایل",
                    labelGeneral: "توضیحات",
                    desc: "توضیحات خود را بنویسید...",
                    send_video_with_original_quality: "ارسال فیلم با کیفیت اصلی",
                    send_as_a_gif: "ارسال به عنوان گیف",
                    error_compress_video: "فشرده سازی ویدئو با خطا مواجه شد.",
                    error_gif_limit_exceeded: "امکان ارسال گیف با حجم بیشتر از ۶۵ مگابایت وجود ندارد.",
                    error_compression_not_supported: "فشرده سازی ویدئو در مرورگر شما پشتیبانی نمی‌شود.",
                    error_send_file_failed: "ارسال فایل با خطا مواجه شد. لطفا دوباره تلاش کنید.",
                    error_file_size_exceeded: "حجم فایل بیشتر از حد مجاز است.",
                    error_send_multi_media_failed: "ارسال پیام به صورت آلبومی با خطا مواجه شد. لطفا دوباره تلاش کنید."
                },
                notificationMessages: {
                    askPermissionTitle: "اجازه دسترسی به اعلان",
                    iosVersionNotSupported: "برای دریافت اعلان پیام‌ها، نسخه iOS خود را به ۱۶.۴ به‌روز رسانی کنید.",
                    permission: {
                        default: 'برای دریافت اعلان‌های پیام جدید گزینهٔ "Allow" را انتخاب کنید.',
                        denied: {
                            firefox_desktop: ["برای دریافت اعلان،‌ دکمهٔ ", " را انتخاب کنید و از بخش \xabPermission\xbb ،\xabSetting\xbb را انتخاب کنید و \xabNotification\xbb بله (web.bale.ai) را فعال کنید."],
                            firefox_mobile: ["برای دریافت اعلان‌، دکمهٔ ", " را انتخاب کنید و “Notification” را فعال کنید."],
                            chrome_desktop: ["برای دریافت اعلان‌، دکمهٔ ", " را انتخاب کنید و \xabNotification\xbb را فعال کنید."],
                            chrome_mobile: ["برای دریافت اعلان‌، دکمهٔ ", " را انتخاب کنید و از بخش \xabNotification\xbb ،\xabPermission\xbb را فعال کنید."],
                            safari_desktop: "برای دریافت اعلان‌، از بخش \xabSetting\xbb ،\xabSafari\xbb را انتخاب کرده و \xabNotification\xbb بله (web.bale.ai) را فعال کنید.",
                            safari_mobile: "برای دریافت اعلان، از بخش \xabSetting\xbb، بله (web.bale.ai) را انتخاب کنید و \xabNotification\xbb را فعال کنید."
                        }
                    },
                    enableNotification: "فعال کردن اعلان پیام‌ها",
                    allowText: `برای دریافت اعلان‌های پیام جدید گزینهٔ "Allow" را انتخاب کنید.`,
                    doItLater: "بعدا فعال می‌کنم"
                },
                locationMessages: {
                    permission: {
                        title: "مجوز دسترسی به موقعیت مکانی (لوکیشن)",
                        confirmText: "بعدا فعال می‌کنم",
                        denied: {
                            title: "فعال‌سازی موقعیت مکانی",
                            description: "برای مشاهدۀ دقیق موقعیت‌تان روی نقشه، لازم است موقعیت مکانی خود را روشن کنید."
                        },
                        android: {
                            desc: "برای ارسال موقعیت مکانی به مخاطبین، اجازۀ دسترسی به موقعیت مکانی را بدهید.",
                            cancleText: "الان نه"
                        },
                        bot: {
                            title: "فعال‌سازی موقعیت مکانی",
                            desc: "برای مشاهدۀ دقیق موقعیت‌تان روی نقشه، موقعیت مکانی را فعال کنید.",
                            confirmText: "فعال‌سازی"
                        }
                    },
                    buttonText: {
                        confirm: "ارسال موقعیت مکانی"
                    },
                    error: "مشکلی در پردازش موقعیت مکانی پیش آمده است."
                },
                pollMessages: {
                    title_label: "سوال",
                    title_placeholder: "سوال خود را بنویسید...",
                    options: "گزینه‌ها (حداکثر {length} گزینه)",
                    option_label: "گزینه",
                    anonymous: "نظرسنجی ناشناس",
                    multiple_choice: "امکان انتخاب چند گزینه",
                    write_question: "نوشتن سوال",
                    poll_settings: "تنظیمات نظرسنجی",
                    max_length: "حداکثر طول سوال {length} کاراکتر است.",
                    empty_option_error: "گزینهٔ نظرسنجی نمی‌تواند خالی باشد.",
                    empty_question_error: "سوال نمی‌تواند خالی باشد.",
                    minumum_poll_options_limit: "برای ساخت نظرسنجی حداقل به ۲ گزینه نیاز دارید.",
                    add_new_option: "افزودن گزینهٔ جدید",
                    error_send_message: "خطا در ارسال پیام",
                    delete_poll: "حذف نظرسنجی",
                    delete_poll_text: "آیا از حذف نظرسنجی اطمینان دارید؟",
                    maximum_options_error: "حداکثر ۱۲ گزینه می‌توانید اضافه کنید."
                },
                poll_bubble: {
                    multi_choice_info: "می‌توانید چند گزینه انتخاب کنید.",
                    final_result: "نتیجهٔ نهایی نظرسنجی",
                    vote: "({vote} نظر)",
                    poll: "نظرسنجی",
                    anonymous_poll: "نظرسنجی ناشناس",
                    show_result: "مشاهدهٔ نتیجه",
                    send: "ارسال",
                    stop_poll_title: "متوقف‌کردن نظرسنجی",
                    stop_poll_body: "بعد از متوقف‌کردن نظرسنجی، امکان نظر دادن وجود ندارد؛ همچنین دیگر نمی‌توانید این نظرسنجی را برگردانید.",
                    stop_poll: "متوقف‌کردن",
                    stop_poll_error: "خطا در متوقف کردن نظرسنجی",
                    vote_poll_error: "مشکلی در رای دادن پیش آمده است",
                    tooltip_text: "{vote} نظر",
                    poll_result: "نتیجهٔ نظرسنجی",
                    participant: "{number} شرکت‌کننده",
                    poll_question: "سوال نظرسنجی",
                    vote_info: "{vote} نظر ({percentage}٪)",
                    other_people: "{count} نفر دیگر"
                },
                schedule_message: {
                    title: "زمان‌بندی پیام",
                    schedule: "زمان‌بندی",
                    send_format: "{day} - ساعت {time}",
                    confirm_format: "ارسال، {day} - ساعت {time}",
                    success: "پیام زمان‌بندی شد.",
                    error: "خطا در زمان‌بندی پیام!",
                    reschedule_success: "پیام با موفقیت زمان‌بندی مجدد شد.",
                    reschedule_error: "خطا در زمان‌بندی مجدد پیام!",
                    edit_success: "پیام با موفقیت ویرایش شد.",
                    sticker_success: "استیکر زمان‌بندی شد.",
                    sticker_error: "خطا در زمان‌بندی استیکر!",
                    gif_success: "گیف زمان‌بندی شد.",
                    gif_error: "خطا در زمان‌بندی گیف!",
                    voice_success: "پیام صوتی زمان‌بندی شد.",
                    voice_error: "خطا در زمان‌بندی پیام صوتی!",
                    poll_success: "نظرسنجی زمان‌بندی شد.",
                    poll_error: "خطا در زمان‌بندی نظرسنجی!",
                    long_message_error: "امکان زمان‌بندی پیام‌های طولانی وجود ندارد!"
                },
                eventBar: {
                    text: "نظرسنجی نسخهٔ وب \xabبله\xbb",
                    link: "کلیک کن"
                },
                survey: {
                    title: "ثبت بازخورد",
                    cancel: "انصراف",
                    howIsPerformance: "عملکرد وب اپلیکیشن \xabبله\xbb چگونه است؟",
                    inputPlaceHolder: "نوشتن توضیحات اختیاری است.",
                    successfullySended: `بازخورد شما با موفقیت ثبت شد؛ از اینکه وقت
    گذاشتید از شما سپاس‌گزاریم. 🌻`,
                    options: {
                        s1: {
                            text: "خیلی بد",
                            question: "چه چیزی خیلی بد بود؟"
                        },
                        s2: {
                            text: "بد",
                            question: "چه چیزی بد بود؟"
                        },
                        s3: {
                            text: "معمولی",
                            question: "چه چیزی جای بهبود دارد؟"
                        },
                        s4: {
                            text: "خوب",
                            question: "چه چیزی باعث عالی شدن آن می‌شود؟"
                        },
                        s5: {
                            text: "عالی"
                        }
                    },
                    sorry: "بابت تجربه‌ای که داشتید، متاسفیم.",
                    success: "بازخورد شما با موفقیت ثبت شد.",
                    call: {
                        howIsCallQuality: "ارزیابی شما از کیفیت تماس \xabبله\xbb چیست؟",
                        whatIsYourISP: "از کدام سرویس‌دهنده اینترنت استفاده می‌کنید؟",
                        ISPs: {
                            hamrahAval: "همراه اول",
                            iranCell: "ایرانسل",
                            rightel: "رایتل",
                            tci: "مخابرات",
                            homemade: "خانگی"
                        }
                    }
                },
                pinned_message: "پیام سنجاق شده",
                multiple_pinned_message: "پیام‌های سنجاق شده",
                counting_unit: "تا",
                been_pinned_message: "پیام سنجاق شد.",
                pin_message: "سنجاق کردن پیام",
                want_pin_message: "آیا می‌خواهید پیام را سنجاق کنید؟",
                send_notif_to_all_members: "ارسال اعلان به تمام اعضا",
                pin_for_current_peer: "برای {name} هم سنجاق شود.",
                removed_pinned_message: "سنجاق پیام برداشته شد.",
                remove_pin_message: {
                    title: "حذف پیام‌{plural} سنجاق‌شده",
                    description: "آیا می‌خواهید پیام‌{plural} سنجاق‌شده را برای همهٔ اعضا حذف کنید؟"
                },
                plural: "های",
                second: "ثانیه",
                seconds: "ثانیه",
                tabEmptyMessages: {
                    Members: "هیچکسی عضو این گروه نشده",
                    Pictures: "تصویری موجود نیست",
                    Videos: "ویدیویی موجود نیست",
                    Documents: "فایلی موجود نیست",
                    Voices: "صوتی موجود نیست",
                    Musics: "موسیقی‌ای موجود نیست",
                    Links: "پیوندی وجود ندارد.",
                    MutualGroups: "گروه مشترکی وجود ندارد."
                },
                selectedMedia: {
                    Members: "",
                    Pictures: "تصویر انتخاب شده",
                    Videos: "ویدیو انتخاب شده",
                    Documents: "فایل انتخاب شده",
                    Voices: "صوت انتخاب شده",
                    Musics: "موسیقی انتخاب شده",
                    Links: "پیوند انتخاب شده"
                },
                sapta_empty_state: {
                    pfm_welcome: "به سرویس\nتراکنش‌های بانک ملّی ایران\nخوش آمدید.",
                    first_transaction_desc: "با انجام اولین تراکنش از حساب بانک ملّی ایران، رسید تراکنش را دریافت کنید.",
                    initializingTip: "به دلیل همگام‌سازی اولیه، حداکثر تا ۲۴ ساعت دیگر تراکنش‌ها در دسترس شما خواهد بود.",
                    services_title: "امکانات این سرویس:",
                    services: ["دریافت رسید تراکنش‌های بانک ملّی ایران", "مدیریت دخل و خرج(مدیریت مالی شخصی)", "تعیین دسته‌بندی برای هر تراکنش", "نمایش گزارش‌های نموداری و متنی"]
                },
                arzEmptyStates: "ظرفیت همهٔ استان‌ها، در تاریخ انتخابی شما تکمیل شده است.",
                arzEmptyBranches: "ظرفیت همهٔ شعبه‌ها، در تاریخ انتخابی شما تکمیل شده است.",
                buyInternetReceipt: {
                    receiptTemplateText: `
        <html>
          <span><b>خرید بسته اینترنت </b></span><br/>
          <span>خرید بسته با موفقیت انجام شد.</span><br/>
          <span>عنوان: </span><span>{title}</span><br/>
          <span>اپراتور: </span><span>{operator}</span><br/>
          <span>شماره همراه: </span><span>{phonenumber}</span><br/>
          <span>مبلغ بسته: </span><span>{amount} ریال</span><br/>
          <span>شماره پیگیری: </span><span>{code}</span><br/>
          <span>تاریخ: </span><span><date>{date}</date></span><br/>
          <span>#خرید #موفق #خرید_بسته_اینترنت</span><br/>
        </html>
      `
                },
                buyChargeReceipt: {
                    directChargeHashtag: "#شارژـمستقیم",
                    codeChargeHashtag: "#کدـشارژ",
                    receiptTemplateText: `
        <html>
          <span><b>خرید شارژ </b></span><br/>
          <span>خرید شارژ {chargeType} با موفقیت انجام شد.</span><br/>
          <span>اپراتور: </span><span>{operator}</span><br/>
          <span>شماره همراه: </span><span>{phonenumber}</span><br/>
          <span>مبلغ: </span><span>{amount} ریال</span><br/>
          <span>شماره پیگیری: </span><span>{code}</span><br/>
          <span>تاریخ: </span><span><date>{date}</date></span><br/>
          <span>#خرید {chargeHashtag} # #موفق</span><br/>
        </html>
      `
                },
                buyChargeTitle: "خرید شارژ",
                buyChargeFailedInfo: "اطلاعات تماس کاربر مورد نظر یافت نشد.",
                buyInternetTitle: "خرید بستهٔ اینترنت",
                pfm: {
                    title: "مدیریت مالی شخصی",
                    topup: "واریز",
                    withdraw: "برداشت",
                    showBalance: "نمایش موجودی",
                    emptyState: {
                        desc: "مدیریت مالی شخصی، ابزاری برای مدیریت دخل و خرج هر فرد، از طریق حساب بانک ملّی ایران است.",
                        services_title: "ویژگی‌های این سرویس:",
                        services: ["نمایش گزارش‌های نموداری و متنی", "تعیین دسته‌بندی برای هر تراکنش", "مشاهدهٔ دخل و خرج در بازه زمانی دلخواه"],
                        show_details: "نحوهٔ فعال‌سازی",
                        activation_title: "برای فعال‌سازی این سرویس به موارد زیر نیاز است:",
                        activation_steps: ["دارا بودن حساب بانک ملّی ایران", "فعال‌سازی پیامک بانک ملّی ایران از طریق مراجعه به شعب بانک ملّی ایران", "دریافت پیام تراکنش در سرویس \xabتراکنش‌های بانک ملّی ایران\xbb"]
                    },
                    analysis: {
                        report: "گزارش تحلیلی",
                        watch: "مشاهده گزارش",
                        month: "ماه",
                        description: "تحلیل اختصاصی واریز و برداشت، در"
                    },
                    tabs: {
                        titles: {
                            chart_report: "گزارش مالی نموداری",
                            text_report: "گزارش مالی متنی"
                        },
                        choose_default_tab: "انتخاب تب پیش‌فرض",
                        account: {
                            number: "شماره حساب",
                            balance: "مانده‌"
                        },
                        dateFilter: "انتخاب بازه زمانی"
                    },
                    date_picker: {
                        apply_filter: "اعمال فیلتر",
                        today: "امروز",
                        last_30_days: "۳۰ روز اخیر",
                        this_month: "ماه جاری",
                        this_week: "هفته جاری",
                        custom_date: "انتخاب بازه زمانی دلخواه",
                        title: "انتخاب بازه زمانی",
                        fromDate: "از تاریخ",
                        dueDate: "تا تاریخ",
                        errors: {
                            startAfterToday: "تاریخ شروع، نباید بعد از تاریخ امروز باشد.",
                            endAfterToday: "تاریخ پایان بازه زمانی، نباید بعد از تاریخ امروز باشد.",
                            endBeforeStart: "تاریخ پایان بازه زمانی، نباید قبل از تاریخ شروع بازه باشد."
                        }
                    },
                    report_details: {
                        report_details: "جزئیات گزارش",
                        withdrawTitle: "جزئیات گزارش برداشت از حساب",
                        popupTitle: "جزئیات گزارش واریز به حساب",
                        total_amount: "مبلغ کل ",
                        unlabeled: "بدون دسته‌بندی",
                        addUserTag: "افزودن دسته‌بندی دلخواه",
                        addUserTagsLimmitReport: "حداکثر ۵ {title} دلخواه می‌توانید ایجاد کنید.",
                        noStickerSelected: "شما برچسبی برای این دسته‌بندی انتخاب نکرده‌اید.",
                        betterToTag: "با تعیین دسته‌بندی برای تراکنش‌های \xabبدون دسته‌بندی\xbb خود، می‌توانید جزئیات دقیق‌تری را دریافت کنید."
                    },
                    tags_filter: {
                        filter: "فیلتر",
                        filterTypes: {
                            all: "همه",
                            withdraw: "برداشت",
                            top_up: "واریز"
                        },
                        title: "فیلتر گزارش مالی متنی",
                        operators: {
                            title: "انتخاب نوع تراکنش"
                        },
                        categories: {
                            top_up: "دسته‌بندی واریز",
                            withdraw: "دسته‌بندی برداشت"
                        },
                        search_bar: {
                            placeholder: "جستجوی دسته‌بندی"
                        },
                        buttons: {
                            withFilter: "اعمال فیلتر",
                            withoutFilter: "حذف همهٔ فیلتر‌ها"
                        },
                        empty: "دسته‌بندی مورد نظر یافت نشد.",
                        noTranscationFound: "هیچ تراکنشی براساس فیلتر انتخابی شما وجود ندارد."
                    },
                    doughnutChart: {
                        footerText: "مشاهدهٔ جزئیات {type}",
                        footerText2: "تعیین دسته‌بندی",
                        labelsPlaceholder: "هیچ تراکنشی در بازه زمانی انتخابی شما وجود ندارد.",
                        income: "واریز",
                        outcome: "برداشت",
                        unknown: "بدون دسته‌بندی"
                    },
                    barChart: {
                        headerText: "نمودار واریز و برداشت",
                        thirtyDaysHeaderText: "نمودار واریز و برداشت (۳۰ روز اخیر)",
                        moneySign: "ریال",
                        income: "واریز",
                        outcome: "برداشت"
                    },
                    customTag: {
                        title: "افزودن {title} دلخواه",
                        confirm_text: "افزودن",
                        exist_error: "این {title} درحال حاضر وجود دارد",
                        input: {
                            title: "نام {title}",
                            placeholder: "وارد کردن نام {title}"
                        },
                        editMode: {
                            title: "ویرایش {title} دلخواه",
                            confirm_text: "ویرایش"
                        }
                    },
                    transactionOptions: {
                        add_desc: "افزودن توضیحات",
                        remove_desc: "حذف توضیحات",
                        edit_desc: "ویرایش توضیحات",
                        desc: "توضیحات",
                        desc_start: "توضیحات: ",
                        add: "افزودن",
                        desc_placeholder: "وارد کردن توضیحات",
                        del: "حذف تراکنش",
                        delete_transaction: "حذف",
                        delete_msg: "با حذف تراکنش، امکان بازگردانی آن وجود ندارد.از حذف تراکنش مطمئن هستید؟"
                    },
                    calculate: {
                        tipTitle: "نحوهٔ محاسبهٔ واریز و برداشت",
                        descriptions1: "مقادیر واریز و برداشت با توجه به پیام‌های دریافتی از بازو اطلاع رسانی بانک ملّی به‌روز رسانی می‌شود. ممکن است به دلیل اختلالات شبکه بانکی، برخی از این تراکنش‌ها در این بازو دریافت نشود که مقادیر این تراکنش‌ها در واریز و برداشت محاسبه نمی‌شود.",
                        description2: "در صورت بروز این مشکل می‌توانید از طریق \xabگزارش خطا\xbb آن را اطلاع دهید."
                    },
                    transaction_type: {
                        0: "",
                        1: "واریز",
                        2: "برداشت"
                    },
                    choose_category: "تعیین دسته‌بندی",
                    tags: {
                        withdraw: {
                            2: "خوراکی و مواد غذایی",
                            3: "حمل و نقل",
                            4: "اینترنت و شارژ",
                            5: "قبض",
                            6: "هزینه‌های خودرو",
                            7: "آرایش و بهداشت",
                            8: "سلامت و درمان",
                            9: "هزینۀ مسکن و اجاره",
                            10: "قسط و بدهی",
                            11: "لوازم منزل",
                            12: "تفریح و سرگرمی",
                            13: "پوشاک و لوازم شخصی",
                            14: "آموزش",
                            15: "خیریه و وجوه اسلامی",
                            16: "هدیه و عیدی",
                            17: "مسافرت",
                            18: "سرمایه گذاری",
                            19: "قرض به دیگران",
                            31: "متفرقه",
                            33: "جیب به جیب",
                            35: "کالای دیجیتال",
                            36: "ورزش"
                        },
                        topup: {
                            20: "حقوق",
                            21: "یارانه و سهام عدالت",
                            22: "سود",
                            23: "رهن و اجاره",
                            24: "پول تو جیبی",
                            25: "دریافت طلب و دنگ",
                            26: "دریافت وام و قرض",
                            27: "فروش دارایی",
                            28: "هدیه و عیدی",
                            29: "پاداش و عیدی کاری",
                            30: "دریافت خسارت",
                            32: "متفرقه",
                            34: "جیب به جیب"
                        }
                    },
                    reportError: {
                        title: "گزارش خطا",
                        requestReport: "ثبت گزارش خطا",
                        placeholder: "برای مثلا:‌ رسید تراکنش واریز را دریافت نکردم",
                        description: "ممکن است به دلیل اختلالات شبکه بانکی، برخی از تراکنش‌ها ثبت نشده باشد و مبلغ واریز و برداشت نمایش داده شده، صحیح نباشد. در صورت بروز این مشکل می‌توانید از طریق کادر پایین آن را به واحد پشتیبانی گزارش دهید.",
                        defaultProblems: ["رسید تراکنش  واریز را دریافت نکردم", "رسید تراکنش برداشت را دریافت نکردم"]
                    },
                    select_tag: {
                        title: "تعیین دسته‌بندی",
                        placeholder: "جستجوی دسته‌بندی",
                        editTitle: "ویرایش دسته‌بندی",
                        search: "جستجوی دسته‌بندی",
                        sticker: "برچسب",
                        tag: "دسته‌بندی",
                        secondLayer: {
                            title: "تعیین برچسب",
                            editTitle: "ویرایش برچسب",
                            placeholder: "جستجوی برچسب",
                            description: "انتخاب برچسب‌ اختیاری است. می‌توانید یک برچسب را انتخاب کنید و یا دسته‌بندی \xab{title}\xbb را تایید کنید.",
                            addSticker: "افزودن برچسب دلخواه",
                            accept: "تائید نهایی",
                            tipDescription: "انتخاب برچسب می‌تواند باعث دقیق‌تر شدن دسته‌بندی تراکنش‌ها شود؛ همچنین در زبانهٔ گزارش نموداری، می‌توانید جزئیات بیشتری از واریز و برداشت داشته باشید.",
                            deleteDescription: "در صورت حذف، از تمامی تراکنش‌هایی دارای این برچسب هستند، حذف خواهد شد."
                        }
                    },
                    cofirmDelete: {
                        title: "از حذف {title} مطمئن هستید؟",
                        description: "در صورت حذف، تمامی تراکنش‌هایی که در این دسته‌بندی هستند، در بخش \xabبدون دسته‌بندی\xbb قرار می‌گیرند.",
                        delete: "حذف {title}",
                        cancel: "انصراف"
                    }
                },
                months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                cart_number: "شماره کارت",
                myCards: {
                    cardsList: {
                        title: "کارت‌های من",
                        add_cart: "افزودن کارت جدید",
                        default: "پیش فرض",
                        cancel_default_card: "انصراف کارت پیش‌فرض",
                        default_card: "کارت پیش‌فرض",
                        authorized_card: "احراز شده",
                        reactivation_needed: "نیاز به احراز مجدد",
                        delete_card: "حذف کارت",
                        noCards: {
                            title: " هنوز کارتی ثبت نشده",
                            description: "ثبت کارت بانکی برای دریافت یا انتقال پول نیاز است"
                        }
                    },
                    shaparak_hub: {
                        enroll_modal_title: "ثبت کارت در سامانه شاپرک",
                        hub_is_down: "درحال حاضر اتصال به سامانهٔ شاپرک امکان‌پذیر نیست؛ لطفا دقایقی دیگر تلاش کنید.",
                        hub_erorr: "انجام فرایند در سامانه شاپرک با خطا مواجه شد. لطفا دوباره تلاش کنید.",
                        enroll: "ثبت کارت",
                        enroll_failed: "ثبت کارت در سامانه شاپرک با مشکل مواجه شد.",
                        cardInfo_failed: "ثبت کارت در سامانه با مشکل مواجه شد.",
                        enroll_success: "کارت شما با موفقیت در سامانه شاپرک ثبت شد.",
                        update: "به‌روز رسانی",
                        try_again: "تلاش مجدد",
                        card_number: "شماره کارت",
                        enroll_in_hub: "ثبت کارت در سامانه شاپرک",
                        enroll_message: "طبق قوانین جدید بانک مرکزی، لازم است کارت‌‌‌\n\xab{bank_name}\xbb خود را یک‌بار در سامانۀ شاپرک ثبت کنید. با انجام این کار، سقف کارت به کارت شما نیز به ۵ میلیون تومان افزایش می‌یابد. برای سهولت در ثبت کارت می‌توانید از طریق قسمت زیر از شماره کارت خود رونوشت بگیرید.",
                        reactivate_message: "طبق قوانین، در صورتی که از حساب‌کاربری خود خارج و دوباره وارد شوید، برنامه را حذف کرده و دوباره نصب کنید، حافظه برنامه را پاک کنید و یا از یک دستگاه جدید استفاده کنید، لازم است دوباره یکی از کارت‌های خود را در سامانۀ شاپرک ثبت کنید تا کارت‌های دیگری که ثبت کرده‌اید، فراخوانی شوند.",
                        update_message: "برای کارت به کارت نیاز است اپلیکیشن \xabبله\xbb را\nبه‌روز رسانی کنید تا به فرآیند احراز هویت کارت بانکی خود دسترسی داشته باشید.",
                        errors: {
                            otp: "به علت اختلال در شبکه لطفا دقایقی دیگر تلاش کنید.",
                            others: "به علت مشکل فنی انجام فرایند با خطا مواجه شد؛ لطفا دقایقی دیگر تلاش کنید.",
                            offline: "دسترسی با خطا مواجه شد، لطفا دوباره تلاش کنید.",
                            expired_card_title: "احراز هویت مجدد",
                            expired_card: "تاریخ انقضاء کارت بانک ملّی شما تغییر یافته است. برای ادامه فرایند نیاز است مجددا در سامانه هاب شاپرک احراز هویت کنید.",
                            enroll_title: "احراز هویت مجدد",
                            enroll: "انجام فرایند با خطا مواجه شد. لطفا مجددا فرایند احراز هویت را انجام دهید.",
                            shaparak_down: "درحال حاضر اتصال به سامانهٔ شاپرک امکان‌پذیر نیست؛ لطفا دقایقی دیگر تلاش کنید.",
                            failed: "انجام فرایند با خطا مواجه شد. لطفا دوباره تلاش کنید.",
                            hub: "انجام فرایند در سامانه شاپرک با خطا مواجه شد. لطفا دوباره تلاش کنید.",
                            error_500: "به علت مشکل فنی، انجام فرایند با خطا مواجه شد؛ لطفا دقایقی دیگر تلاش کنید.",
                            error_400: "انجام فرایند با خطا مواجه شد؛ لطفا دوباره تلاش کنید.",
                            unknown: "به علت مشکل فنی انجام فرایند با خطا مواجه شد؛ لطفا دقایقی دیگر تلاش کنید."
                        }
                    },
                    addCard: {
                        title: "افزودن کارت بانکی",
                        save_card: "ذخیرهٔ کارت",
                        cardTitle: "عنوان کارت",
                        cardTitlePlaceholder: "برای مثال: حساب پس‌انداز",
                        saveAsDefaultCard: "ذخیره به عنوان کارت پیش‌فرض",
                        defaultCardDescription: "مبالغ ارسالی از سوی دیگران، به کارت پیش‌فرض شما واریز می‌شود"
                    }
                },
                wallet: {
                    melli_bank_wallet: "کیف پول ملّی",
                    error: "به دلیل مشکلات فنی موجودی کیف پول به‌روز نشد.",
                    updating: "درحال بروزرسانی...",
                    wallet_balance: "موجودی کیف پول",
                    more_menu: {
                        increase_balance: "افزایش موجودی",
                        cashout: "برداشت از کیف پول",
                        wallet_history: "گردش حساب کیف پول"
                    },
                    more_menu_gold: {
                        buy_gold: "خرید طلا",
                        sell_gold: "فروش طلا",
                        transaction_history: "تاریخچه معاملات",
                        gold_trade: "خرید و فروش طلا"
                    }
                },
                gift_pocket: {
                    send_gift_button: "عیدی بده",
                    gift_pocket: "پاکت هدیه",
                    person: "نفر",
                    open_gift: {
                        status_text: {
                            finished: "پاکت هدیه تمام شد.",
                            timed_out: "پاکت هدیه منقضی شد.",
                            gift_received: "شما هدیه‌تان را دریافت کردید.",
                            all_packets_opened: "همهٔ پاکت هدیه‌ها باز شد."
                        },
                        bubble_text: {
                            late: "دیر رسیدید\nامیدوارم دفعه بعدی شما برنده باشید \uD83D\uDE0D",
                            won: "شما نفر اول شدید \uD83D\uDE0D"
                        },
                        unopened_count: "تعداد پاکت بازنشده",
                        opened_count: "تعداد پاکت بازشده",
                        receivers: "دریافت‌کنندگان",
                        not_opened: "باز نشده: ",
                        your_gift_colon: "هدیهٔ شما: ",
                        your_gift: "هدیهٔ شما",
                        gift_amount_colon: "مبلغ پاکت: ",
                        gift_amount: "مبلغ پاکت",
                        gift_added_to_wallet: "مبلغ پاکت‌‌ هدیه به کیف‌پول ملی شما واریز شد.",
                        no_gift_opened: "هنوز پاکتی باز نشده."
                    },
                    message: {
                        from: "از طرف",
                        open: "باز کردن پاکت",
                        see_details: "مشاهده جزئیات"
                    },
                    send_gift: {
                        modals: {
                            guide: {
                                title: "تعداد دریافت‌کننده پاکت هدیه",
                                content: "تعداد دریافت کننده پاکت هدیه، مشخص کننده تعداد افرادی است که می‌توانند پاکت را باز کنند. هر عضو فقط یکبار امکان باز کردن پاکت را دارد. حداکثر تعداد پاکت با توجه به تعداد اعضا و مبلغی که برای پاکت تعیین کرده‌اید مشخص می‌شود. طبیعتا اگر تعداد دریافت‌کننده پاکت کمتر باشد، هیجان باز کردن پاکت بیشتر خواهد شد."
                            },
                            success: {
                                title: "پاکت هدیه با موفقیت ارسال شد.",
                                content: "رسید آن در بازوی تراکنش ارسال شد."
                            },
                            error: {
                                title: "پرداخت انجام نشد.",
                                content: "لطفا دوباره تلاش کنید."
                            }
                        },
                        errors: {
                            should_enter_pocket_message: "وارد کردن پیام پاکت الزامی است",
                            should_enter_pocket_number: "وارد کردن تعداد پاکت الزامی است",
                            should_enter_amount: "وارد کردن مبلغ الزامی است",
                            minimum_pocket_amount: "مبلغ کمتر از {amount} هزار تومان امکان‌پذیر نیست",
                            maximum_pocket_amount: "مبلغ بیشتر از {amount} تومان امکان‌پذیر نیست"
                        },
                        placeholders: {
                            amount: "۱۰,۰۰۰",
                            pocket_number: "برای مثال: ۲۰",
                            pocket_message: "برای مثال: عید شما مبارک"
                        },
                        title: "ارسال پاکت هدیه",
                        suggestions: "پیام‌های پیشنهادی:",
                        equal_division: "تقسیم یکسان",
                        equal: "یکسان",
                        random_division: "تقسیم تصادفی",
                        random: "تصادفی",
                        distribution_help: "مبلغ کل به‌صورت {type} بین افراد تقسیم می‌شود.",
                        send_to: "ارسال به",
                        pocket_amount: "مبلغ پاکت",
                        gift_pocket_amount: "مبلغ پاکت هدیه",
                        pocket_message: "پیام پاکت هدیه",
                        pocket_receivers: "تعداد دریافت‌کننده پاکت هدیه",
                        use_wallet_credit: "استفاده از موجودی کیف پول",
                        wallet_credit: "موجودی کیف پول",
                        not_updated: "به‌روز نشد",
                        payable_amount: "مبلغ قابل پرداخت",
                        pocket_number_help: "با توجه به مبلغ پاکت، حداکثر {count} نفر می‌توانند پاکت را باز کنند.",
                        defaultExamples: "بر طبل شادانه بکوب \uD83C\uDF89 \uD83C\uDFC5 & شیرینی \uD83E\uDDC1\uD83C\uDF69  & دوستت دارم ❤️ & تولدت مبارک \uD83C\uDF82\uD83E\uDD73 & برگ سبزی است تحفهٔ درویش  \uD83C\uDF31",
                        show_amount: "نمایش مبلغ پاکت هدیه به دریافت‌کنندگان"
                    }
                },
                gold_gift_packet: {
                    gold_gift_packet: "پاکت هدیه طلایی",
                    person: "نفر",
                    open_gift: {
                        status_text: {
                            finished_sender: "هدیه تمام شد.",
                            finished_reciever: "پاکت هدیه طلایی تمام شد.",
                            timed_out_reciever: "پاکت هدیه طلایی منقضی شد.",
                            timed_out_sender: "هدیه منقضی شد",
                            gift_received: "شما هدیه‌تان را دریافت کردید.",
                            all_packets_opened: "همهٔ پاکت ها باز شدند."
                        },
                        bubble_text: {
                            late: "دیر رسیدید\nامیدوارم دفعه بعدی شما برنده باشید \uD83D\uDE0D",
                            won: "شما نفر اول شدید \uD83D\uDE0D"
                        },
                        unopened_count: "تعداد پاکت بازنشده",
                        opened_count: "تعداد پاکت بازشده",
                        receivers: "دریافت‌کنندگان",
                        not_opened: "باز نشده: ",
                        your_gift_colon: "هدیهٔ شما: ",
                        your_gift: "هدیهٔ شما",
                        gift_amount_colon: "مبلغ پاکت: ",
                        gift_amount: "مبلغ پاکت",
                        gift_added_to_wallet: "مبلغ پاکت‌‌ هدیه به کیف‌ طلایی شما واریز شد.",
                        no_gift_opened: "هنوز پاکتی باز نشده.",
                        remaining_will_added: "پاکت‌‌های باقی‌مانده به کیف طلای شما واریز می‌شود.",
                        error: "مشکلی در باز کردن پاکت هدیه به وجود آمده است. لطفا مجددا پاکت را باز کنید"
                    },
                    message: {
                        from: "از طرف",
                        open: "باز کردن پاکت",
                        see_details: "مشاهده جزئیات"
                    }
                },
                cardPosition: {
                    source: "مبدا",
                    destination: "مقصد"
                },
                validateCardErrors: {
                    generalInvalidCardNumber: "شماره کارت وارد شده معتبر نمی باشد.",
                    invalidSourceCardNumber: "شماره کارت مبدا وارد شده صحیح نیست!",
                    invalidDestinationCardNumber: "شماره کارت مقصد وارد شده صحیح نیست!",
                    invalidCardNumber: "شماره کارت {source} وارد شده صحیح نیست!",
                    destinationCanNotBeSameAsSource: "شماره کارت مقصد نمی تواند همانند شماره کارت مبدا باشد.",
                    notCompleteCardNumber: "لطفا شماره کارت {source} را کامل وارد کنید.",
                    requiredCardNumber: "وارد کردن شماره کارت {source} الزامی است.",
                    minimumAmount: "بانک {source} مبالغ کمتر از {amount} ریال پشتیبانی نمی کند.",
                    maximumAmount: "بانک {source} مبالغ بیشتر از {amount} ریال پشتیبانی نمی کند.",
                    amountIsRequired: "وارد کردن مبلغ الزامی می باشد.",
                    sourceBankDisabled: "کارت به کارت از این مبدا امکان پذیر نیست."
                },
                cardToCard: {
                    sourceCardNumber: "شماره کارت مبدا",
                    EnterCards: {
                        title: "کارت به کارت",
                        sourceCard: "کارت مبدا",
                        destinationCard: "کارت مقصد",
                        amount: "مبلغ",
                        help_text: "کمتر از {amount} تومان امکان پذیر نیست.",
                        description: "توضیحات",
                        optional: "اختیاری",
                        sourceBanks: "بانک‌های مبدأ تحت پوشش",
                        soonOtherBankWillAdd: "به زودی سایر بانک‌ها نیز به این سرویس اضافه خواهند شد."
                    },
                    requestMoney: {
                        receiverMoney: "دریافت کننده پول",
                        amount: "مبلغ:"
                    },
                    errors: {
                        paymentFailed: "پرداخت انجام نشد",
                        failedTryAgainLater: "خطایی رخ داده است لطفا بعدا تلاش کنید.",
                        dateIsExpired: "تاریخ وارد شده منقضی شده است"
                    },
                    ConfirmAndPay: {
                        title: "کارت به کارت",
                        storeCard: "ذخیرۀ کارت مقصد برای تراکنش‌های بعدی",
                        destinationCard: "کارت مقصد:",
                        cardOwner: "صاحب کارت:",
                        amount: "مبلغ:",
                        infoSourceCard: "اطلاعات کارت مبدا",
                        sourceCard: "کارت مبدا",
                        month: "ماه",
                        year: "سال",
                        cvv2: "CVV2",
                        otp: "رمز دوم پویا",
                        receiveOtp: "دریافت رمز پویا",
                        otpHelp: {
                            title: "راهنمای استفاده از رمز پویا",
                            content: `بر اساس دستور العمل بانک صادرکننده کارت خود، نسبت به فعال‌سازی رمز پویا اقدام کنید. پس از فعال‌سازی؛ رمز پویا را می‌توانید به یکی از روش‌های زیر دریافت کنید:
         <br>
         ۱. دریافت از طریق برنامه کاربردی بانک، اینترنت بانک و یا موبایل بانک
         <br>
         ۲. دریافت از طریق کد USSD بانک صادرکننده کارت شما
         <br>
         ۳. دریافت از طریق زدن دکمه \xabدریافت رمز پویا\xbb در همین صفحه
         <br>
         ۴. اگر از روش‌هایی نظیر برنامک‌های رمزساز استفاده می‌کنید، نیازی به فشردن دکمه رمز پویا نیست و می‌توانید رمز را در این بخش وارد کنید`
                        },
                        otpHelpText: "استفاده از رمز ایستا امکان‌پذیر نیست. لطفا رمز پویای خود را از برنامه‌های دیگر یا دکمه سبز رنگ دریافت و وارد کنید."
                    },
                    receipt: {
                        title: "رسید کارت به کارت",
                        successFullMessage: "کارت به کارت با موفقیت انجام شد.",
                        transferAmount: "مبلغ واریزی",
                        sourceCard: "کارت مبدا",
                        destinationCard: "کارت مقصد",
                        destinationCardHolder: "صاحب کارت",
                        payment_info: "اطلاعات پرداخت",
                        code: "کد رهگیری",
                        description: "توضیحات"
                    },
                    photoReceipt: {
                        transferMoney: "انتقال پول",
                        successMessage: ".کارت به کارت با موفقیت انجام شد",
                        amount: "مبلغ:",
                        sourceCard: ":کارت مبدا",
                        destCard: ":کارت مقصد",
                        destCardHolder: ":صاحب کارت مقصد",
                        traceNumber: ":شماره پیگیری",
                        date: ":تاریخ انتقال",
                        hashtags: "کارت_به_کارت #واریز #موفق#",
                        url: ":دانلود از",
                        errorGenerateReceipt: "در ساخت رسید مشکلی به وجود آمده است"
                    }
                },
                selectDestinationCard: "کارت مقصد",
                selectSourceCard: "کارت مبدا",
                selectBankCard: "کارت بانکی",
                savedCards: "کارت های ذخیره شده",
                baleContacts: "مخاطبین \xabبله\xbb",
                bank: "بانک",
                defaultCard: "کارت پیشفرض",
                no_result: "نتیجه‌ای یافت نشد!",
                otpPrefix: "رمز ",
                otpPrefix2: "رمز:",
                receiptCardToCardMessage: `
                    <html>
                        <span><b>انتقال پول</b></span><br/>
                        <span>کارت ب کارت با موفقیت انجام شد.<br/>مبلغ واریزی: </span>
                        <span><font color='#e6455c'>{amount} ریال</font></span><br/>
                        <span>کارت مبدا: </span><span>{sourceCard}</span><br/>
                        <span>کارت مقصد: </span><span>{destCard}</span><br/>
                        <span>صاحب کارت مقصد: </span><span>{destName}</span><br/>
                        <span>شماره پیگیری: </span><span>{traceNumber}</span><br/>
                        <span>تاریخ انتقال: </span>
                        <span><date>{date}</date></span><br/>
                        <span>#کارت_ب_کارت #واریز #موفق</span>
                        </html>
                  `,
                group_permissions: {
                    content_type: {
                        gif_sticker: "استیکر و گیف",
                        multimedia: "رسانه",
                        message: "پیام",
                        gifs: "گیف",
                        stickers: "استیکر",
                        this: "این {place}"
                    },
                    for_you: "برای شما",
                    can_not_send_type_in_where: "مجوز ارسال {type} در {where} بسته شده است.",
                    can_not_send_type_in_where_for_you: "مجوز ارسال {type} در {where} برای شما بسته شده است.",
                    can_not_forward_message_title: "عدم امکان بازارسال پیام",
                    can_not_forward_type_in_groups: "مجوز ارسال و باز ارسال {contentType} در {groups} بسته شده است.",
                    can_not_forward_type_in_groups_for_you: "مجوز ارسال و باز ارسال {contentType} در {groups} برای شما بسته شده است.",
                    can_not_forward_general_in_groups: "پیام شما حاوی محتوایی‌ است که مجوز ارسال و باز ارسال آن در {groups} وجود ندارد."
                },
                request: {
                    sendPhone: {
                        title: "ارسال شماره تلفن همراه",
                        description: "این بازو نیاز به دسترسی شماره تلفن شما دارد. آیا شماره تلفن خود را به اشتراک می‌گذارید؟ (این موضوع می‌تواند برای همگام سازی با سایر سرویس‌ها مفید باشد.)"
                    },
                    sendLocation: {
                        title: "اشتراک‌گذاری موقعیت مکانی",
                        description: "این بازو نیاز به دسترسی به موقعیت مکانی شما دارد. آیا موقعیت مکانی خود را به اشتراک می‌گذارید؟ "
                    }
                },
                crowdFunding: {
                    badge: {
                        remainingTime: "زمان باقی‌مانده: {time}",
                        remainingDays: "{days} مانده",
                        remainingLabel: "روز مانده",
                        expired: "مهلت تمام شد",
                        done: "تکمیل شد",
                        stopped: "متوقف شد"
                    },
                    from: "از {amount} ریال",
                    tamin: "تامین شده",
                    complete_text: "{amount} ریال تامین شد و به ایجادکننده‌ی پیام داده شد.",
                    button: {
                        involve: "شرکت در پویش",
                        details: "مشاهده جزئیات"
                    },
                    create: {
                        warning: "مبالغ دریافتی به‌‌صورت خودکار به کیف پول شما منتقل خواهد شد",
                        title: "جمع‌سپاری مالی",
                        destCard: "کارت مقصد",
                        campaign_title: "عنوان پویش",
                        desc: "توضیحات",
                        sliceAmount: "مبلغ هر سهم",
                        duration: "مدت پویش",
                        choose: "انتخاب کنید",
                        create: "ایجاد پویش",
                        desc_placeholder: "برای مثال: شما هم در کار خیر سهیم شوید",
                        title_placeholder: "برای مثال: جمع آوری نذورات برای ماه رمضان",
                        amount: "مبلغ پویش",
                        factor: "ریال {amount}",
                        amount_placeholder: "60,000",
                        errors: {
                            minimum_amount: "مبلغ کمتر از هزار تومان امکان‌پذیر نیست",
                            empty_input: "همه‌ی موارد را پر کنید."
                        }
                    },
                    openModal: {
                        title: "جمع‌سپاری مالی",
                        description: "توضیحات",
                        perSlice: "هر سهم:",
                        finalAmount: "مبلغ نهایی:"
                    },
                    days_remaining: "{count} روز"
                },
                days_remaining: "{count} روز",
                more: "بیشتر",
                less: "کمتر",
                share_receipt: "اشتراک‌گذاری رسید",
                copy_receipt: "کپی رسید",
                invite_friends: "دعوت از دوستان",
                entry: {
                    searchingForMessage: "درحال جستجوی پیام...",
                    searchingForPeer: "درحال جستجوی گفتگو...",
                    entrySearchingError: "جستجو با خطا مواجه شد"
                },
                openDialogError: "خطایی در بازکردن گفتگو رخ داده است.",
                loadVideoError: "نمایش ویدیو با خطا مواجه شد.",
                unsupportedVideo: "نمایش این ویدئو در مرورگر پشتیبانی نمی‌شود.",
                not_allowed_video_error: "پخش ویدیو توسط مرورگر یا دستگاه شما مسدود شد. لطفاً برای ادامه، اجازه پخش را بدهید.",
                sticker_pack: {
                    add_sticker: "افزودن استیکر",
                    add_to_sticker_pack: "افزودن به استیکرها",
                    remove_from_sticker_pack: "حذف از استیکرها",
                    no_name_sticker_pack: "بستهٔ استیکر",
                    remove_pack: "حذف از استیکر‌ها",
                    addMessage: "به استیکر‌ها اضافه شد",
                    removedMessage: "این بسته استیکر حذف شد",
                    recentStickers: "استیکر های اخیر",
                    errors: {
                        add_sticker: "اضافه کردن استیکر با خطا مواجه شد.",
                        remove_sticker: "حذف استیکر با خطا مواجه شد.",
                        sticker_not_found: "بستهٔ استیکر یافت نشد.",
                        sticker_packs_limit_exceed: "ظرفیت استیکر شما پر شده است."
                    }
                },
                gif: {
                    gif: "گیف",
                    add_gif_success: "به گیف‌ها اضافه شد.",
                    remove_gif_success: "این گیف از گیف‌ها حذف شد.",
                    add_gif_limit_exceeded_error: "ظرفیت افزودن گیف تکمیل شده است.",
                    add_gif: "افزودن گیف",
                    menu: {
                        send_gif: "ارسال گیف",
                        schedule_gif: "زمان‌بندی ارسال گیف",
                        delete_gif: "حذف از گیف‌ها"
                    },
                    gif_panel_tooltip: "مشاهده گیف‌های جدید\uD83D\uDC47"
                },
                picker: {
                    emoji: "اموجی",
                    sticker: "استیکر",
                    gif: "گیف",
                    gif_picker_title: "گیف‌ها"
                },
                walletPayment: {
                    use_wallet_credit: "استفاده از موجودی کیف پول",
                    wallet_credit: "موجودی کیف پول: {amount} ریال",
                    updating: "درحال بروزرسانی...",
                    payableAmount: "مبلغ قابل پرداخت:"
                },
                cancelRecordingConfirm: {
                    description: "شما درحال ضبط پیام صوتی هستید. با تغییر گفتگو، پیام صوتی لغو و حذف می‌شود؛ آیا از لغو و حذف پیام صوتی اطمینان دارید؟",
                    remove: "حذف پیام صوتی"
                },
                requestMoneyDetail: {
                    see_details: "مشاهده جزئیات",
                    payable: "مبلغ قابل پرداخت",
                    desired: "دلخواه",
                    payment_list: "لیست پرداخت‌ها",
                    payed_amount: "مبلغ پرداختی:",
                    payment_date: "تاریخ پرداخت:",
                    payment_code: "شماره پیگیری رسید:"
                },
                sendRequestMoney: {
                    title: "درخواست پول",
                    destinationCard: "کارت مقصد",
                    amount: "مبلغ",
                    desiredAmount: "مبلغ متغییر (تعیین مبلغ به عهده پرداخت کننده)",
                    messageDetails: "جزئیات پیام",
                    messageText: "متن پیام",
                    messageTextPlaceholder: "توضیحات درخواست پول...",
                    defaultImageError: "مشکلی در بارگذاری تصویر پیش فرض رخ داده است."
                },
                account_number: "شماره حساب",
                uploadImage: "بارگذاری تصویر",
                userDefaultCardError: "کاربر مورد نظر شما کارتی برای دریافت پول ثبت نکرده است",
                userFaildGetCard: "مشکلی در گرفتن شماره کارت کاربر رخ داده است.",
                cardBalance: {
                    title: "موجودی کارت",
                    supportOnlyMeli: "درحال حاضر این خدمت فقط برای کارت‌های بانک ملّی ایران فعال است.",
                    cardNumber: "شماره کارت",
                    supportError: "درحال‌حاضر گرفتن موجودی از {bank} امکان پذیر نیست.",
                    remainError: "خطایی در گرفتن موجودی کارت رخ داده است.",
                    balance: "موجودی: {amount} ریال",
                    operationBank: "بانک عامل:",
                    currentBalance: "مانده جاری:",
                    availableBalance: "مانده قابل برداشت:"
                },
                cardStatement: {
                    title: "صورت‌حساب",
                    listTransactionTitle: "۱۰ تراکنش آخر حساب شما",
                    amount: "مبلغ:",
                    date: "تاریخ:",
                    transactionType: "نوع تراکنش:",
                    statementError: "خطایی در گرفتن صورت‌حساب رخ داده است."
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
                    equal: "معادل",
                    amount_errors: {
                        max: "حداکثر مبلغ مجاز برداشت از کیف پول {amount} تومان است.",
                        min: "حداقل مبلغ مجاز برداشت از کیف پول ۱۰,۰۰۰ تومان است.",
                        notEnough: "مبلغ وارد شده بیشتر از موجودی کیف پول شما است."
                    },
                    no_commission: "درحال حاضر برداشت از کیف پول بانک ملّی بدون کارمزد است",
                    no_commission_for_balance: "درحال حاضر ثبت اطلاعات بانکی از طریق مانده‌گیری با کارمزد ۴۵۰ ریال صورت می‌گیرد و صرفا برای دارندگان حساب بانک ملی امکان‌پذیر است.",
                    cashout_commission: "کارمزد برداشت از حساب",
                    submit_bank_info_success_modal: {
                        title: "اطلاعات بانکی شما با موفقیت ثبت شد.",
                        content: "اکنون می‌توانید موجودی کیف پول خود را به حساب بانکی منتقل کنید."
                    },
                    enter_amount: "انتخاب مبلغ",
                    cashout_to: "واریز به حساب",
                    error_modal: {
                        title: "برداشت از کیف پول انجام نشد"
                    },
                    upgrade_wallet_error: "خطایی در ارتقای سطح کیف پول رخ داده است.",
                    receipt: {
                        page_title: "رسید برداشت از کیف پول",
                        title: "برداشت از کیف پول با موفقیت انجام شد.",
                        amount: "مبلغ واریزی",
                        account_number: "شماره حساب مقصد",
                        info: "اطلاعات پرداخت",
                        ref_number: "کد رهگیری"
                    },
                    withdrawal_amount: "مبلغ قابل برداشت",
                    commission: "کارمزد"
                },
                charge_wallet: {
                    title: "افزایش موجودی",
                    choose_amount: "انتخاب مبلغ",
                    desired_amount: "مبلغ دلخواه",
                    help_text: "افزایش موجودی کمتر از هزار تومان امکان‌پذیر نیست.",
                    amount_errors: {
                        min: "مبلغ کمتر از هزار تومان امکان‌پذیر نیست.",
                        max: "مبلغ بیشتر از {amount} ریال امکان‌پذیر نیست."
                    },
                    wallet_usage: {
                        title: "با موجودی چه کارهایی می‌توانید بکنید؟",
                        send_gift: "برای دوستان خود \xabپاکت هدیه\xbb ارسال کنید.",
                        buy_things: "شارژ و بسته اینترنت بخرید."
                    },
                    error_modal: {
                        title: "افزایش موجودی کیف پول انجام نشد"
                    },
                    cutOffModal: {
                        title: "افزایش موجودی کیف پول",
                        content: "به دلیل انجام عملیات شبکۀ بانکی در پایان روز، افزایش موجودی در کیف پول از ساعت ۰۰:۰۵ بامداد امکان‌پذیر خواهد شد."
                    }
                },
                wallet_history: {
                    title: "گردش حساب کیف پول",
                    empty_state: "هنوز تراکنشی با کیف پول انجام نداده‌اید",
                    transaction_type: {
                        balance: "مانده",
                        increase_inventory: "افزايش موجودی",
                        inquire_name_holder: "استعلام نام دارنده",
                        profile: "پروفایل",
                        bills: "صورتحساب",
                        transfer_kif_to_kif: "انتقال کيف به کيف",
                        transaction_inquiry: "استعلام تراکنش",
                        edit_profile: "ویرایش پروفایل",
                        inventory_reduction: "کاهش موجودی",
                        wallet_status_change: "تغيير وضعيت کيف",
                        withdrawal_permission: "مجوز برداشت",
                        buy_permiumcontent: "خريد محتوا",
                        send_gift_pocket: "ارسال پاکت هدیه",
                        recive_gift_pocket: "دریافت پاکت هدیه",
                        buy_charge: "خرید شارژ",
                        withdrawal: "برداشت نقدی",
                        billpayment: "پرداخت قبض",
                        buyecharge: "خرید شارژ",
                        buye: "خرید",
                        refund: "برگشت خرید",
                        deposit: "واریز وجه نقدی",
                        deposit_permission: "مجوز واریز وجه نقدی",
                        authentication: "احراز هویت",
                        issue: "صدور",
                        charge_permission: "مجوز افزایش اعتبار",
                        share_buy: "خرید اشتراکی",
                        issue_cashe_account: "تعریف حساب نقدی"
                    }
                },
                submit_bank_info_modal: {
                    title: "ثبت اطلاعات بانکی",
                    content: " طبق دستورالعمل بانک مرکزی جهت برداشت از کیف پول لازم است اطلاعات بانکی خود را از طریق مانده‌گیری حساب ثبت کنید."
                },
                trialVersion: "نسخهٔ آزمایشی",
                somethingWentWrong: "خطایی رخ داده است.",
                voice: {
                    swipe_left: "به چپ بکشید تا لغو شود",
                    stop: "توقف",
                    tooltip: "نگه دارید تا ضبط شود، رها کنید تا ارسال شود.",
                    tooltip_touch_start: "برای ضبط ضربه بزنید.",
                    preparing: "درحال آماده سازی",
                    modals: {
                        stopRecording: {
                            title: "حذف پیام‌صوتی",
                            description: "آیا از متوقف کردن ضبط و حذف پیام‌صوتی اطمینان دارید؟",
                            confirm: "حذف پیام صوتی",
                            cancel: "انصراف"
                        },
                        failed: "عدم امکان ارسال پیام‌صوتی",
                        failedToSend: "به‌دلیل مشکلات فنی، پیام‌صوتی شما ارسال نشد.",
                        iosVersionError: "برای ارسال پیام صوتی، نسخه iOS خود را به‌روز رسانی کنید.",
                        lowVoiceDuration: "امکان ارسال پیام صوتی زیر ۱ ثانیه وجود ندارد.",
                        permissionDenied: "مشکلی در ضبط صدا به وجود آمده‌ است. دسترسی میکروفون خود را بررسی کنید.",
                        unabledToSend: "به‌دلیل مشکلات فنی، امکان ارسال پیام‌صوتی وجود ندارد."
                    },
                    voiceErrors: {
                        zeroTime: "مشکل در زمان صوت",
                        not_allowed_error: "دسترسی به میکروفون توسط شما لغو شد. لطفاً اجازه دسترسی را فعال کنید.",
                        not_found_error: "هیچ میکروفونی شناسایی نشد. لطفاً اتصال میکروفون را بررسی کنید.",
                        not_readable_error: "امکان دسترسی به میکروفون وجود ندارد. ممکن است دستگاه دیگری در حال استفاده باشد.",
                        overconstrained_error: "میکروفون مورد نظر یافت نشد یا با تنظیمات فعلی سازگار نیست.",
                        security_error: "به دلایل امنیتی، امکان دسترسی به میکروفون وجود ندارد. لطفاً از طریق HTTPS وارد شوید."
                    }
                },
                time: {
                    hour: "ساعت",
                    hours: "ساعت",
                    minute: "دقیقه",
                    minutes: "دقیقه",
                    day: "روز",
                    days: "روز",
                    before: "قبل",
                    ago: "قبل",
                    now: "الان",
                    some_time: "مدتی",
                    today: "امروز",
                    yesterday: "دیروز",
                    tomorrow: "فردا"
                },
                download_warn: {
                    confirm: "دانلود",
                    cancel: "انصراف",
                    title: "دانلود فایل {ext}",
                    description: "قبل از دانلود فایل {ext} از معتبر بودن منبع آن اطمینان حاصل کنید. در صورت نامعتبر بودن فایل، دستگاه و داده‌های شخصی‌تان در معرض خطر قرار می‌گیرد. شما در برابر هر گونه آسیب به دستگاه یا از دست دادن داده‌ها که ممکن است در اثر دانلود کردن این فایل رخ دهد، مسئول هستید."
                },
                mention: {
                    userDoesNotExists: "شخصی با این حساب کاربری وجود ندارد.",
                    unknownError: "خطا در باز کردن حساب کاربری."
                },
                not_supported: "این قابلیت در این مرورگر پشتیبانی نمی‌شود.",
                qr_purchase: {
                    scan_qr: "اسکن بارکد",
                    enter_amount: "مبلغ سفارش را وارد کنید",
                    amount: "مبلغ سفارش",
                    min_error: "حداقل مبلغ خرید هزار تومان می‌باشد.",
                    pay_to: "پرداخت به",
                    dest_token: "شناسۀ کیف مقصد",
                    book_credit: "بن کتاب",
                    use_book_credit: "استفاده از موجودی بن کتاب",
                    successful_payment: "پرداخت با موفقیت انجام شد",
                    expire_date: "انقضا: ‌۳۰ اردیبهشت (تا پایان نمایشگاه)",
                    your_credit: "بن کتاب شما: {amount} ریال"
                },
                avatar_more_menu: {
                    show_profile: "مشاهدهٔ عکس",
                    show_story: "مشاهدهٔ ماجرا"
                },
                stream: {
                    arbaeenTooltipe: "اعلام وضعیت اربعین، ماجرا و محتوای جذاب را از اینجا مشاهده کنید.",
                    tooltip: "ماجرا و مجله را از اینجا ببینید",
                    tabs: {
                        channel: "کانال",
                        myChannels: "کانال‌های من",
                        channelsPost: "محتوای کانال",
                        feed: "مجله",
                        post: "محتوا",
                        image: "تصویر"
                    },
                    search: {
                        result: "نتایج جستجو",
                        recent: "جستجوهای اخیر",
                        deleteAll: "حذف همه",
                        popular: "برترین‌های روز"
                    },
                    arbaeen: {
                        topBarTitle: "اعلام وضعیت اربعین",
                        title: "سامانهٔ اعلام وضعیت اربعین",
                        description: "\xabرایگان\xbb و \xabبدون نیاز به اینترنت\xbb",
                        guide: "راهنمای استفاده",
                        text: {
                            title: "اعلام وضعیت و مشاهدهٔ وضعیت:",
                            description: "امکان استفاده از \xabسامانهٔ اعلام وضعیت اربعین بله\xbb برای کاربران وب و iOS وجود ندارد.\n\nاگر *کاربر iOS* هستید می‌توانید در گوشی همراه، کد [**۵۰۰**۲#](tel:*500*2#) را شماره‌گیری کنید تا وضعیت خود را اعلام و یا وضعیت دیگران را مشاهده کنید.\n\nاگر کاربر وب هستید و گوشی اندروید دارید، برای استفاده از \xabسامانهٔ اعلام وضعیت اربعین\xbb می‌توانید اپلیکیشن \xabبله\xbb را نصب کنید. [دانلود اپلیکیشن بله](https://bale.ai/?utm_source=bale&utm_medium=elamvaziat&utm_campaign=downloadapp#download_section)"
                        }
                    },
                    magazine: {
                        touchToSeeAttractiveContent: "لمس کنید تا محتوای جذاب و متنوع ببینید."
                    },
                    magazineJoinToast: "شما به کانال \xab{channel}\xbb پیوستید.",
                    upvote: {
                        recommend_for_magazine: "پیشنهاد برای \xabمجله\xbb",
                        cancel_recommend_for_magazine: "لغو پیشنهاد برای \xabمجله\xbb",
                        first_upvote_modal_description: `مجله، جایی برای نمایش پُست‌های پرطرفدار کاربران است. شما می‌توانید پُست محبوب خود را برای انتشار در مجلهٔ روز بعد پیشنهاد دهید.

روزانه می‌توانید فقط *{count} پُست* برای مجله پیشنهاد دهید. *اسم شما در لیست پیشنهاد دهندگان نمایش داده می‌شود.*`,
                        maximum_upvote_modal_description: `به سقف روزانهٔ {count} انتخاب برای \xabمجله\xbb رسیده‌اید.
برای انتخاب بیشتر پست برای \xabمجله\xbb فردا بیایید.`,
                        toast_join_for_upvote: "با عضویت در کانال می‌توانید محتوا برای \xabمجله\xbb پیشنهاد دهید.",
                        toast_join_for_revoke: "با عضویت در کانال می‌توانید پُست پیشنهاد‌شده را لغو کنید.",
                        toast_maximum_for_upvote: "به سقف پیشنهاد برای \xabمجله\xbb رسیده‌اید.",
                        toast_success_upvote_message: "این پُست برای انتشار در \xabمجله\xbb کاندیدا شد.",
                        toast_success_upvote_message_first: "این پُست برای انتشار در \xabمجله\xbb کاندیدا شد.\nاسم شما در لیست پیشنهاد ‌دهندگان نمایش داده می‌شود.",
                        toast_success_revoke_message: "\xabپیشنهاد برای مجله\xbb لغو شد."
                    }
                },
                feed: {
                    more: "...بیشتر",
                    all: "همه",
                    video: {
                        more_content: "محتوای بیشتر",
                        replay: "پخش مجدد"
                    },
                    upvotes: {
                        upvoters: "پیشنهاد دهندگان",
                        upvoter: "پیشنهاد دهنده",
                        upvoterCount: "پیشنهاد دهنده",
                        upvotersCount: "پیشنهاد دهنده",
                        counts: "{count} نفر",
                        tooltipOther: "پُست پیشنهادی کاربرها برای \xabمجله\xbb",
                        tooltipMe: "پُست پیشنهادی شما برای \xabمجله\xbb",
                        guide: `شما می‌توانید پُست‌های محبوب خود را از طریق کانال‌ها برای \xabمجله\xbb پیشنهاد دهید.`
                    },
                    reactionLongTouchGuide: "با نگه‌داشتن دکمهٔ پسند می‌توانید<br>سایر واکنش‌ها را انتخاب کنید.",
                    channelDisableReaction: "واکنش‌های این پُست توسط مالک کانال بسته شده است.",
                    contextMenu: {
                        join: "عضویت در کانال",
                        see: "مشاهدهٔ کانال",
                        forward: "بازارسال",
                        savedMessage: "فضای شخصی",
                        copy: "رونوشت متن",
                        download: "دانلود",
                        report: "گزارش"
                    },
                    toasts: {
                        refresh_feed_failed: "مجله به‌روز نشد.",
                        connection_failed: "عدم اتصال به اینترنت..."
                    },
                    swipeAnimation: {
                        header: "صفحه را به بالا بکشید",
                        desc: "برای دیدن محتوای بیشتر، صفحه را به بالا بکشید."
                    },
                    channelForward: {
                        forwardActions: {
                            copyLink: "رونوشت پیوند",
                            share: "اشتراک گذاری",
                            addStory: "افزودن به ماجرا"
                        },
                        forwardSelectMaxNumber: "امکان انتخاب بیش از ۵۰ گفتگو وجود ندارد.",
                        sharingTitle: "مجله"
                    }
                },
                vitrine: {
                    title: "ویترین",
                    see: "مشاهده",
                    seeChannel: "مشاهده کانال",
                    seeGroup: "مشاهده گروه",
                    joinChannel: "عضویت",
                    startBot: "شروع بازو",
                    startChat: "شروع گفتگو",
                    memberCount: "{count} عضو",
                    openLink: "ورود به سایت"
                },
                exchange: {
                    disableBranch: "ظرفیت شعبه‌ٔ مورد نظر تکمیل است."
                },
                font: "قلم",
                yesterday: "دیروز",
                conjunctions: {
                    and: "و",
                    comma: "،"
                },
                onboarding: {
                    access_contact_guide: {
                        title: "مجوز دسترسی به مخاطبین",
                        desc: "برای دسترسی به مخاطبین، مراحل گفته شده در راهنما را انجام دهید.",
                        button: "راهنمای دسترسی به مخاطبین",
                        step_0: "برای دسترسی به مخاطبین \xabبله\xbb مراحل زیر را انجام دهید:",
                        step_1: "۱. *تنظیمات* گوشی‌تان را باز کنید.",
                        step_2: "۲. از بین برنامه‌ها *Safari* را انتخاب کنید.",
                        step_3: "۳. در انتهای صفحه *Advanced* را انتخاب کنید.",
                        step_4: "۴. گزینهٔ *{flag}* انتخاب کنید.",
                        step_5: "۵. گزینهٔ *Contact Picker API* را فعال کنید.",
                        step_6: "۶. برنامهٔ \xabبله\xbb را از صفحه ببندید و مجدد باز کنید.",
                        desc_desktop: "برای دسترسی به مخاطبینی که در \xabبله\xbb حساب کاربری دارند، از طریق گوشی‌تان به این حساب کاربری وارد شوید و به مخاطبین‌تان دسترسی دهید."
                    },
                    add_contact: {
                        title: "افزودن مخاطبین به \xabبله\xbb",
                        desc: "در مرحلهٔ بعد مخاطبین خود را انتخاب کنید. در‌صورتی‌که مخاطب انتخاب‌شده در \xabبله\xbb حساب کاربری داشته باشد در لیست مخاطبین شما نمایش داده می‌شود.",
                        button: "افزودن مخاطبین"
                    },
                    empty_state: {
                        are_more_than_2_present: "{userNamesText} و {count} مخاطب دیگر در \xabبله\xbb حضور دارند.",
                        two_are_present: "{userNamesText} \xabبله\xbb حضور دارند.",
                        one_is_present: "{userNamesText} در \xabبله\xbb حضور دارد."
                    }
                },
                contacts: {
                    search_placeholder: "جستجوی مخاطب...",
                    update_contacts: "بروزرسانی مخاطبین",
                    add_new_contact: "افزودن مخاطب",
                    contacts_updated: {
                        one_person_added: "\xab{contacts}\xbb به مخاطبین اضافه شد.",
                        multiple_person_added: "\xab{contacts}\xbb به مخاطبین اضافه شدند.",
                        error_update_users: "افزودن مخاطبین با مشکل مواجه شد. لطفا دوباره تلاش کنید.",
                        and_k_more_contacts: " و {k} نفر دیگر"
                    },
                    error_in_updating: "به‌روز رسانی مخاطبین با خطا مواجه شد.",
                    contact_limit_exceed_error: "تعداد مخاطبین به سقف مجاز رسیده است.",
                    no_contact_imported_error: "مخاطب اضافه شده در \xabبله\xbb حساب کاربری ندارد.",
                    contact_picker: {
                        access_to_Contacts: "دسترسی به مخاطبین",
                        update_contacts: "به‌روز رسانی مخاطبین",
                        access_steps: ["۱- تنظیمات گوشی‌تان را باز کنید.", "۲- از بین برنامه‌ها، *Safari* را انتخاب کنید.", "۳- در انتهای صفحه، *Advanced* را انتخاب کنید.", "۴- گزینهٔ *Experimental Feature* را انتخاب کنید.", "۵- گزینهٔ *Contact Picker API* را فعال کنید."],
                        select_desc: "در لیستی که به شما نمایش داده می‌شود؛ با انتخاب هر مخاطب، در صورتی که در \xabبله\xbb حساب کاربری داشته باشد، به مخاطبین \xabبله\xbb اضافه می‌شود.",
                        description: "برای مشاهد و گفتگو با دوستان‌تان، لازم است مخاطبین‌تان را وارد \xabبله\xbb کنید.",
                        do_this_for_update: "برای به‌روز رسانی مراحل زیر را انجام دهید:"
                    },
                    ios: {
                        bale_contacts: "افزودن مخاطبین به \xabبله\xbb",
                        load_contacts: "بارگذاری مخاطبین از فایل vcf",
                        wrong_file_format_warning: "فرمت فایل ارسال‌شده اشتباه است."
                    },
                    add_contact: {
                        title: "افزودن مخاطب",
                        phone_validation: "شماره همراه اشتباه است",
                        phone_empty_error: " وارد کردن شمار‌ه همراه الزامی است",
                        through_username: "از طریق نام کاربری",
                        username: "نام کاربری",
                        username_placeholder: "نام کاربری را وارد کنید...",
                        through_phone_number: "از طریق شماره همراه",
                        name: "نام",
                        name_placeholder: "نام(ضروری)",
                        name_validation: "نام ضروری است",
                        add: "افزودن",
                        account_not_exist: "مخاطب مورد نظر در \xabبله\xbb حساب کاربری ندارد.",
                        already_added: "این مخاطب قبلا اضافه شده است.",
                        add_contact_done: "به مخاطبین اضافه شد",
                        add_contact_success: "مخاطب مورد نظر به مخاطبین اضافه شد.",
                        add_contacts_success: "مخاطبین مورد نظر اضافه شدند."
                    },
                    share_bale: {
                        title: "\xabبله\xbb را به دوستان خود معرفی کنید",
                        invite: "دعوت از دوستان",
                        description: "لینک زیر را برای دوستان خود بفرستید و آنها را به \xabبله\xbb دعوت کنید"
                    },
                    confirm_create: {
                        desc: "برای ساخت {type} لازم است مخاطبین خود را به \xabبله\xbb اضافه کنید. در‌صورتی‌که مخاطب انتخاب‌شده در \xabبله\xbb حساب کاربری داشته باشد در لیست مخاطبین شما نمایش داده می‌شود.",
                        title: "افزودن مخاطبین به \xabبله\xbb",
                        cancel: "{type} بدون عضو"
                    },
                    create_group: {
                        title: "ساخت گروه",
                        group_name: "نام گروه",
                        group_name_placeholder: "نام گروه را بنویسید...",
                        upload_avatar: "بارگذاری عکس گروه",
                        description: "توضیحات",
                        description_placeholder: "متنی دربارهٔ گروه بنویسید...",
                        description_description: "نوشتن توضیحات اختیاری است",
                        create: "ساخت گروه",
                        who_willـbe_added: "چه افرادی به گروه اضافه می‌شوند؟",
                        member_limit_reached: "امکان دعوت کردن عضو جدید هنگام ساخت گروه به سقف مجاز رسیده است.",
                        group_type: "نوع گروه",
                        private_desc: "گروه‌های خصوصی از طریق دعوت مالک و مدیران یا لینک دعوت قابل دسترس هستند.",
                        public_desc: "گروه‌های عمومی از بخش جست‌و‌جو قابل دسترس هستند و هر فردی می‌تواند به آن اضافه شود.",
                        nick_description: "از طریق شناسهٔ‌ زیر افراد دیگر می‌توانند گروه شما را جستجو کنند.",
                        nick: "شناسهٔ گروه"
                    },
                    private: "خصوصی",
                    public: "عمومی",
                    create_channel: {
                        title: "ساخت کانال",
                        group_name: "نام کانال",
                        group_name_placeholder: "نام کانال را بنویسید...",
                        upload_avatar: "بارگذاری عکس کانال",
                        description: "توضیحات",
                        description_placeholder: "متنی دربارهٔ کانال بنویسید...",
                        description_description: "نوشتن توضیحات اختیاری است",
                        create: "ساخت کانال",
                        who_willـbe_added: "چه افرادی به کانال اضافه می‌شوند؟",
                        group_type: "نوع کانال",
                        public_desc: "کانال‌های عمومی از بخش جستجو قابل دسترس هستند  و هر فردی می‌تواند به آن بپیوندد.",
                        private_desc: "کانال‌های خصوصی از طریق دعوت مالک و مدیران یا لینک دعوت قابل دسترس هستند.",
                        member_limit_reached: "امکان دعوت کردن عضو جدید هنگام ساخت کانال به سقف مجاز رسیده است.",
                        nick_description: "از طریق شناسهٔ‌ زیر افراد دیگر می‌توانند کانال شما را جستجو کنند.",
                        nick: "شناسهٔ کانال",
                        nick_delete: "حذف شناسه",
                        nick_warn: "شناسه باید حداقل ۵ کاراکتر از حروف انگلیسی کوچک و اعداد باشد. می‌توانید بین کاراکتر‌ها از زیرخط هم استفاده کنید"
                    },
                    orderBy: {
                        name: "مرتب‌شده بر اساس نام",
                        presence: "مرتب‌شده بر اساس آخرین زمان بازدید"
                    },
                    blocked: "شما این کاربر را مسدود کرده‌اید.",
                    update: "به‌روز رسانی",
                    nick_placeholder: "http://ble.ir/",
                    status: {
                        nick_accepted: '"{id}" امکان‌پذیر است',
                        nick_searching: "در حال بررسی شناسه...",
                        nick_error_forbidden: "استفاده از این شناسه امکان‌پذیر نیست.",
                        nick_error_empty: "وارد کردن شناسه الزامی است",
                        nick_error_invalid: "شناسه باید حداقل ۵ کاراکتر از حروف انگلیسی کوچک و اعداد باشد. می‌توانید بین کاراکتر‌ها از زیرخط هم استفاده کنید",
                        nick_error_exist: '"{id}" قبلا انتخاب شده است'
                    },
                    organization: {
                        title: "مخاطبین سازمان {organiztionName}",
                        error: "درخواست شما با مشکل مواجه شد. لطفا دوباره تلاش کنید."
                    }
                },
                textMessage: "پیام",
                greeting: "با زدن روی استیکر بالا می‌توانید به {name} سلام کنید\uD83D\uDC4B",
                scheduled: {
                    empty_message: "پیام زمان‌بندی‌شده‌ای ندارید.",
                    unschedule_failed_count: "خطا در حذف {count} پیام زمان‌بندی‌شده!"
                },
                scheduled_messages: {
                    title: "پیام‌های زمان‌بندی‌شده"
                },
                dailogs_empty_state: "{userNamesText} و {count} مخاطب دیگر در \xabبله\xbb حضور دارند.",
                invalid_file_type: "امکان بارگذاری این عکس وجود ندارد.",
                suspend_user: {
                    title: "حساب کاربری مسدود شده",
                    titleProfile: "تعلیق شده",
                    descriptions: "حساب کاربری شما مسدود شده است. جهت رفع مسدودیت حساب کاربری به آدرس {link} مراجعه کنید."
                },
                change_phone_number: {
                    item_description: "برای تغییر شماره همراه کلیک کنید.",
                    title: "تغییر شماره همراه",
                    info: {
                        first_section: {
                            title: "با تغییر شماره همراه‌، این موارد به شمارۀ جدیدتان منتقل نمی‌شود:",
                            items: ["اتصال به موجودی کیف پول قطع می‌شود ولی می‌توانید پیش از تغییر شماره همراه موجودی فعلی را برداشت کنید؛", "کارت‌های احراز شده به احراز مجدد نیاز خواهند داشت؛", "درصورت عضویت در پنل تبلیغات، نیاز به احراز هویت مجدد خواهید داشت.", "درصورت ارسال پاکت و باز نشدن آن، مبلغ به کیف پول شماره فعلی بازگردانده می‌شود؛"]
                        },
                        second_section: {
                            title: "با تغییر شماره همراه،‌ این موارد به شمارۀ جدیدتان منتقل می‌شود:",
                            items: ["اطلاعات حساب (نام، نام کاربری، عکس پروفایل، دربارۀ من و ...) به شماره همراه جدید منتقل می‌شود؛", "پیام‌های شخصی، گروه‌، کانال‌، بازو و تاریخچۀ آنها به شماره همراه جدید منتقل می‌شود؛", "در صورت مالکیت گروه و کانال، مالکیت آنها به شماره همراه جدید منتقل می‌شود؛", "تنظیمات حریم خصوصی و امنیت به شماره همراه جدید منتقل می‌شود."]
                        }
                    },
                    accept_terms: "تمام شرایط را مطالعه کرده و با آن موافقم.",
                    kiff_error: "کیف پول معتبر نمی‌باشد.",
                    enter_new_phone_number: `
    شماره همراه جدیدتان کد ورود را به‌صورت پیامک دریافت خواهد کرد.</br>
    توجه داشته باشید، شماره‌ای که وارد می‌کنید، دارای حساب کاربری در \xabبله\xbb نباشد.
    `,
                    new_phone_number: "شماره همراه جدید",
                    new_number_placeholder: "9123456789",
                    invalid_number_error: "شماره تلفن نامعتبر است",
                    less_length_number_error: "شماره تلفن باید ۱۰ رقم باشد.",
                    same_number_error: "شماره تماس جدید باید با شماره فعلی متفاوت باشد",
                    number_already_exist: "شماره تماس جدید باید با شماره فعلی متفاوت باشد",
                    otp: {
                        code: "کد تایید",
                        placeholder: "12345",
                        code_sent: "کد تایید را به شمارۀ {phone_number} ارسال کردیم.",
                        wrong_phone_number: "شماره اشتباه است؟",
                        until_code: "تا دریافت کد",
                        get_new_code: "دریافت کد جدید"
                    },
                    errors: {
                        USER_ALREADY_EXISTS: "شمارۀ وارد قبلا در \xabبله\xbb حساب کاربری ساخته است.",
                        PHONE_NUMBER_INVALID: "شماره همراه اشتباه وارد شده است."
                    },
                    error_modal: {
                        title: "عدم امکان تغییر شماره همراه",
                        description: "موجودی کیف پول شما {amount} هزار تومان است، برای تغییر شماره همراه، ابتدا موجودی کیف پول خود را برداشت کنید و سپس مجددا برای تغییر شماره همراه تلاش کنید.",
                        description_second_paragraph: "می‌توانید با موجودی کیف پول، شارژ، بستۀ اینترنتی و ... تهیه کنید."
                    },
                    notify_contacts: {
                        title: "اطلاع‌رسانی به مخاطبین",
                        desc: "آیا می‌خواهید مخاطبین‌ شما از تغییر شماره همراه‌تان مطلع شوند؟",
                        only_contacts: {
                            title: "مخاطبین",
                            desc: "فقط مخاطبین دلخواه‌تان از تغییر شماره همراه‌تان مطلع می‌شوند.",
                            desc_selected: "به‌جز {number} نفر انتخاب‌شده",
                            add_exception: "افزودن استثنا"
                        },
                        custom_contacts: {
                            title: "مخاطبین دلخواه",
                            desc: "فقط مخاطبین دلخواه‌تان از تغییر شماره همراه‌تان مطلع می‌شوند.",
                            desc_selected: "{number} نفر انتخاب شده",
                            add: "افزودن"
                        }
                    },
                    succeeded: "تغییر شماره همراه با موفقیت انجام شد."
                },
                goToFirstMessage: "رفتن به اولین پیام",
                click: "کلیک کنید",
                tap: "ضربه بزنید",
                channelComment: {
                    comment: "دیدگاه",
                    comments: "دیدگاه",
                    settings: {
                        title: "تنظیمات دیدگاه",
                        enable_comment: "افزودن دیدگاه به پُست‌ها",
                        enable_comment_desc: "در صورت فعال‌بودن این گزینه، دیدگاه به پُست‌هایی که از این به بعد ارسال می‌کنید افزوده می‌شود.",
                        success_set_title: "دیدگاه برای کانال شما با موفقیت فعال شد.",
                        success_set_description: "از این به بعد همهٔ پست‌های کانالتان و دیدگاه‌های آن در *\xab{title}\xbb*، ارسال می‌شود.",
                        deactivated: "غیرفعال",
                        activated: "فعال",
                        leave_comment_permissions: "تنظیم مجوز نوشتن دیدگاه",
                        leave_comment_p_title: "کسانی که می‌توانند دیدگاه بنویسند، به چه کارهایی دسترسی داشته باشند؟",
                        join_group: "پیوستن به گروه",
                        see_group: "مشاهدهٔ گروه"
                    },
                    leave_comment: "نوشتن دیدگاه",
                    errors: {
                        error_activate_comment: "دیدگاه فعال نشد. لطفا مجددا تلاش کنید.",
                        join_to_change_settings: "برای تنظیم مجوز، به گروه \xab{group}\xbb بپیوندید.",
                        leave_comment_disabled: "دیدگاه این پُست غیرفعال شده است."
                    },
                    no_discussion: "هنوز دیدگاهی وجود ندارد.",
                    discussion_started: "شروع دیدگاه‌ها",
                    ban_leave_comment: "حذف مجوز نوشتن دیدگاه"
                },
                groupReplies: {
                    reply: "پاسخ",
                    replies: "پاسخ",
                    replies_title: "پاسخ‌",
                    replies_started: "شروع پاسخ‌ها"
                },
                singular_verb: "است",
                plural_verb: "اند",
                plural_suffix: "ان",
                inviteGroup: {
                    title: "دعوت از طریق پیوند",
                    description: "به دلیل تنظیمات حریم خصوصی این {users}، امکان افزودن به {groupType} وجود ندارد. برای دعوت می‌توانید از پیوند استفاده کنید.",
                    users: {
                        singleUser: "کاربر",
                        multipleUser: "کاربران"
                    },
                    label: "پیام ارسالی",
                    message: "سلام\nاز طریق پیوند زیر می‌توانید در {groupType} \xab{groupName}\xbb عضو شوید.\n{link}",
                    sendInviteLink: "ارسال پیوند {groupType}",
                    toastText: "پیام ارسال شد",
                    placeholder: "متن ارسالی را بنویسید"
                },
                relatedGroups: {
                    title: "{groupType}‌های پیشنهادی",
                    moreChannels: "{groupType}های بیشتر"
                },
                privateGroup: {
                    title: "پیوستن به گروه"
                },
                another_member: "عضو دیگر",
                quote: "\xab{name}\xbb",
                forwarded_from: "بازارسال شده از ",
                recommendation: {
                    title: "{groupType}‌های پیشنهادی",
                    description: "{member} عضو | {nickname}@",
                    seeMoreGroups: "مشاهدهٔ {groupType}‌های بیشتر",
                    contextMenu: {
                        join: "عضویت",
                        see: "مشاهده {groupType}"
                    }
                },
                share_target: {
                    share_hint: "اشتراک گذاری با...",
                    select_user_to_share: "برای اشتراک گذاری پیام حداقل یک مخاطب را انتخاب کنید."
                },
                group: {
                    status: {
                        title_error_empty: "وارد کردن نام الزامی است.",
                        title_error_forbidden: "استفاده از این نام امکان‌پذیر نیست."
                    },
                    profile: {
                        permissions: {
                            remove: {
                                success: "با موفقیت دسترسی حذف شد."
                            },
                            general: {
                                error: "در تنظیم مجوزها خطایی پیش آمد.",
                                success: "تغییرات با موفقیت انجام شد."
                            },
                            set_user_permissions: {
                                title: "عنوان شخصی‌سازی‌ شده",
                                text_field: {
                                    label: "عنوان شخصی‌سازی‌ شده",
                                    placeholder: "عنوان شخصی‌سازی را وارد کنید...",
                                    help: "این عنوان کنار اسم نمایش داده می‌شود."
                                },
                                errors: {
                                    general: "مشکلی در تغییر عنوان پیش آمده است.",
                                    max_length_limit: "عنوان وارد شده به حداکثر کاراکتر مجاز رسیده است."
                                },
                                change_success: "عنوان برای \xab{name}\xbb ثبت شد."
                            }
                        },
                        banned: {
                            title: "کاربران حذف‌شده",
                            description: "کاربرانی که توسط مدیران یا مالکان از {groupType} حذف شده‌اند، نمی‌توانند از طریق پیوند و شناسه به {groupType} اضافه شوند.",
                            unRemove: "حذف از این لیست",
                            bannedBy: "حذف شده توسط {name}",
                            emptyState: "شما در {groupType} کاربری را حذف نکرده‌اید.",
                            removedBy: "\xab{name}\xbb از لیست حذف شد."
                        }
                    }
                },
                unblockedUserToast: "\xab{name}\xbb از لیست کاربران مسدود‌شده حذف شد.",
                banned: {
                    is_banned_due_to: "با توجه به گزارش کاربران، این پیام به دلیل *{reason}*، مسدود شده است.",
                    banned: "مسدود شده",
                    sender_warning: "لطفاً توجه داشته باشید که انتشار این نوع محتوا برخلاف قوانین \xabبله\xbb است و درصورت تکرار، {type}تان مسدود خواهد شد.",
                    banned_message: "پیام مسدود شده"
                },
                webApp: {
                    contextMenu: {
                        open_bot: "رفتن به بازو",
                        reload_page: "بارگذاری مجدد صفحه",
                        add_to_homescreen: "افزودن به صفحهٔ اصلی",
                        terms: "شرایط و قوانین",
                        settings: "تنظیمات",
                        close_miniapp: "بستن مینی‌اپ"
                    },
                    close_description: "با خروج از مینی اپ تغییرات ذخیره نمی‌شود.\nآیا از خروج اطمینان دارید؟",
                    open_confirm_modal_terms: "شرایط و قوانین بازوها",
                    open_from_dialog: "باز کردن",
                    minimized_text: "{active} و {count} بازوی دیگر",
                    bot_tabs: "زبانه‌های بازو",
                    see_active_tabs: "مشاهدهٔ بازوهای فعال",
                    close_tab: "بازوی \xab{name}\xbb بسته شد.",
                    max_concurrent_limit: "شما نمی‌توانید بیش از {max} مینی اپ همزمان باز کنید. لطفاً ابتدا برخی از زبانه‌ها را ببندید.",
                    agreements: {
                        unblockBotTitle: "رفع مسدودیت بازو",
                        unblockBotDescription: "شما بازوی {name} را مسدود کرده‌اید. در صورت راه‌اندازی {name}، بازو رفع مسدودیت می‌شود",
                        launchNewBotTitle: "راه‌اندازی بازوی جدید",
                        launchNewBotWithNewTerms: "با راه‌اندازی بازوی {name}، شما با {terms} در بله موافقت می‌کنید و این بازو می‌تواند برای شما پیام ارسال کند و در فهرست گفتگوهای شما نمایش داده خواهد شد.",
                        launchNewBotWithMiniApp: "با راه‌اندازی بازوی {name}، این بازو می‌تواند برای شما پیام ارسال کند و در لیست گفتگوهای شما نمایش داده می‌شود.",
                        termsUpdatedTitle: "به‌روز رسانی شرایط و قوانین بازو",
                        termsUpdatedDescription: "با راه‌اندازی این بازو شما با {terms} در \xabبله\xbb موافقت می‌کنید."
                    }
                },
                bots: {
                    activeUsers: "کاربر ماهانه",
                    customAction: {
                        unsupportedButton: "نسخه \xabبلۀ\xbb شما از این دکمه پشتیبانی نمی‌کند. لطفاً نسخه اپلیکیشن را به‌روز رسانی کنید."
                    },
                    rating: {
                        description: "  امتیاز شما به کیفیت بازوی \xab{name}\xbb چیست؟",
                        title: "نظرسنجی بازو",
                        submit: "ثبت",
                        inputPlaceholder: "توضیحات خود را وارد کنید...",
                        inputLabel: "توضیحات",
                        limit: "به محدودیت حداکثر کاراکتر رسیدید.",
                        submitted: "امتیاز شما با موفقیت ثبت شد.",
                        failed: "به دلیل مشکل فنی، ثبت امتیاز انجام نشد."
                    }
                },
                search_file: "جستجوی فایل",
                ramz: {
                    set_password: "ایجاد رمز عبور",
                    set_password_desc: "رمز ۶ رقمی مورد نظر خود را وارد کنید.",
                    set_password_protected_message_desc: "با ایجاد رمز عبور،‌ می‌توانید محتوای پیام‌های رمزدار را مشاهده کنید.",
                    set_password_gold_packet_and_wallet_desc: "با ایجاد رمز عبور،‌ می‌توانید خرید و فروش طلا را با امنیت بیشتر دریافت کنید.\nاز این رمز عبور در فرآیند خرید و فروش طلا، ارسال پاکت هدیهٔ طلایی، کارت‌به‌کارت، مشاهدهٔ برخی پیام‌‌های بازوهای بانکی و سازمانی استفاده می‌شود.",
                    successfully_reset_password: "از این رمز عبور در فرآیند خرید و فروش طلا، ارسال پاکت هدیهٔ طلایی، کارت‌به‌کارت، مشاهدهٔ برخی پیام‌‌های بازوهای بانکی و سازمانی استفاده می‌شود.",
                    set_password_error: "ایجاد رمز عبور با خطا مواجه شد. لطفا مجددا تلاش کنید.",
                    check_password: "وارد کردن رمز عبور",
                    check_password_text: "رمز ۶ رقمی خود را وارد کنید.",
                    forget_password: "رمز عبور خود را فراموش کرده‌اید؟",
                    wrong_password: "رمز عبور وارد شده اشتباه است.",
                    recover_password: "بازیابی رمز عبور",
                    recover_password_desc: "تایید دومرحله‌ای برای شما فعال است. برای بازیابی، رمز تایید دومرحله‌ای را وارد کنید.",
                    code_via_sms: "کد ارسال شده از طریق پیامک را وارد کنید.",
                    check_by_biometrics: "ورود با اثر انگشت",
                    entered_wrong_code: "کد وارد شده اشتباه است.",
                    resend_code: "ارسال مجدد کد",
                    enter_password: "رمز عبور ۶ رقمی را وارد کنید.",
                    not_equal_passwords: "رمز عبورها با هم، یکسان نیستند.",
                    error_transfer: "فرایند انتقال با خطا مواجه شد، لطفا دوباره رمز عبور خود را وارد کنید.",
                    error_otp_already_sent: "کد برای شما ارسال شده است. لطفا برای درخواست مجدد، ۲ دقیقهٔ دیگر اقدام کنید.",
                    error_biometry_failed: "لطفاً دوباره تلاش کنید یا رمز عبور را وارد کنید.",
                    password_created_success: "رمز عبور شما با موفقیت ایجاد شد.",
                    password_usage_info: "با این رمز عبور می‌توانید برخی پیام‌های  بازوهای بانکی و سازمانی را مشاهده کنید.",
                    protected_content_note: "پس از وارد کردن رمز عبور، محتوای پیام به شما نمایش داده خواهد شد.",
                    show_message: "مشاهده پیام",
                    message: "پیام",
                    enter_confirm_code: "وارد کردن کد تایید"
                },
                transcript: {
                    is_transcripting: "درحال تبدیل صوت به متن ...\nلطفاً کمی صبر کنید.",
                    error: {
                        err_limit_reached: "سقف مجاز استفادهٔ روزانه به پایان رسید.",
                        max_limit_duration: "امکان تبدیل پیام‌‌ صوتی بیشتر از {duration} دقیقه وجود ندارد.",
                        no_text_exist: "در پیام صوتی، متنی تشخص داده نشد.",
                        general: "سرویس دچار اختلال شده‌است.\nلطفاً چند دقیقه دیگر تلاش کنید."
                    }
                },
                link_summary: {
                    view_summary: "مشاهده خلاصه لینک",
                    title: "خلاصه لینک (آزمایشی)",
                    loading: "در حال ایجاد خلاصه...",
                    error: "خطا در بارگذاری خلاصه. لطفاً دوباره تلاش کنید.",
                    url_label: "لینک",
                    summary_label: "خلاصه",
                    feedback_received: "نظر شما دریافت شد. متشکریم!"
                },
                try_again: "تلاش مجدد",
                upgrade_wallet: {
                    remain_balance: "مانده‌گیری",
                    enter_account_no: "برای برداشت از حساب پس‌انداز و احراز هویت، شماره حساب بانک ملّی خود را وارد کنید.",
                    melli_account_no: "شماره حساب بانک ملّی",
                    account_no_required: "وارد کردن شماره حساب الزامی است",
                    card_number: "شماره کارت"
                },
                meet: n.w,
                topic: {
                    recent_conversations: "گفتگوهای اخیر",
                    new_conversation: "گفتگوی جدید",
                    nth_conversation: "گفتگو",
                    search: "جستجو در گفتگوها",
                    rename: "تغییر نام",
                    delete_alert: "آیا از حذف این گفتگو اطمینان دارید؟",
                    delete_convesation: "حذف گفتگو",
                    rename_title: "تغییر نام گفتگو",
                    rename_placeholder: "عنوان گفتگو را وارد کنید",
                    rename_label: "عنوان گفتگو",
                    all_conversations: "همه گفتگوها"
                },
                IconAdBanner: {
                    badge: "تبلیغ"
                }
            }
        },
        10250: function(e, t, o) {
            o.d(t, {
                K: () => a
            });
            let a = {
                title: "تنظیمات",
                menu: {
                    notifications: "اعلان‌ها",
                    transaction_settings: "تنظیمات تراکنش‌ها",
                    auto_download: "امکان دانلود خودکار",
                    appearance: "تغییرات ظاهری",
                    folders: "پوشه‌ها",
                    chat: "تنظیمات گفتگو",
                    privacy_security: "حریم خصوصی و امنیت",
                    blocked_users: "کاربران مسدود شده",
                    default_tab: "زبانه‌ٔ پیش‌فرض",
                    language: "زبان",
                    location: "موقعیت مکانی",
                    storage_management: "مدیریت حافظه"
                },
                folders: {
                    title: "پوشه‌ها",
                    menu: {
                        add_folder: "ایجاد پوشه جدید",
                        add: "افزودن",
                        primary_add_dialog: "افزودن گفتگو (شخصی، گروه، کانال و‌ بازو)",
                        secondary_add_dialog: "افزودن گفتگو",
                        folder_name: "نام پوشه",
                        folder_name_input_placeholder: "نام پوشه را وارد کنید.",
                        empty_folder_name_error: "وارد کردن نام پوشه الزامی است.",
                        add_dialog_title: "افزودن گفتگو",
                        search: "جستجو",
                        edit_folder: "ویرایش پوشه ",
                        delete_folder: "حذف پوشه",
                        suggested_folders: "پوشه‌های پیشنهادی ",
                        your_folders: "پوشه‌های شما",
                        folder_count: "{count} پوشه",
                        folders_count: "{count} پوشه",
                        disabled: "غیرفعال کردن پوشه",
                        confirmText: `
      آیا از حذف پوشۀ \xab{folder}\xbb اطمینان دارید؟
 درصورت حذف پوشه، گفتگو‌های این پوشه حذف نخواهد شد.
      `,
                        add_conversation_to: "افزودن گفتگو به \xab{folder}\xbb",
                        add_conversation: "افزودن گفتگو",
                        dialog_count: "{count} گفتگو",
                        create_folder_error: "امکان ایجاد بیشتر از {count} پوشه وجود ندارد.",
                        private: "شخصی",
                        create_folder_success: "پوشه با موفقیت ساخته شد.",
                        default_folder_click: "پوشه‌های پیش‌فرض غیرقابل ویرایش می‌باشد.",
                        folder_dialog_error: "برای ساخت پوشه جدید، باید حداقل یک گفتگو اضافه کنید."
                    }
                },
                storage_management: {
                    media_types: {
                        photo: "تصاویر",
                        video: "فیلم",
                        voice: "پیام‌های صوتی",
                        file: "فایل",
                        gif: "گیف‌ها",
                        sticker: "استیکر‌ها",
                        avatar: "آواتار‌ها",
                        audio: "موسیقی‌ها"
                    }
                },
                location: {
                    title: "موقعیت مکانی"
                },
                default_tab: {
                    mainTitle: "زبانه‌ی پیش‌فرض",
                    title: "انتخاب زبانه‌ی پیش‌فرض"
                },
                auto_download: {
                    in_data_mode: "هنگام استفاده از داده تلفن همراه",
                    in_wifi_mode: "هنگام اتصال به وای‌فای",
                    media_types: {
                        photo: "تصویر",
                        video: "فیلم",
                        voice: "پیام صوتی",
                        file: "فایل",
                        gif: "گیف"
                    }
                },
                chat: {
                    template: "با فشردن {keys} پیام شما ارسال می‌شود",
                    title: "ارسال پیام با فشردن:",
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
                        background: "تنظیم پس‌زمینهٔ گفتگو"
                    },
                    background: {
                        title: "پس‌زمینهٔ گفتگو",
                        menu: {
                            set_background_image: "انتخاب عکس پس‌زمینه",
                            set_background_color: "تنظیم رنگ پس‌زمینه",
                            set_light_dark: "حالت شب و روز",
                            set_photo_from_gallery: "افزودن عکس از نگارخانه"
                        },
                        blur: "شدت محو شدن",
                        theme_light: "حالت روز",
                        theme_dark: "حالت شب",
                        theme_auto: "حالت خودکار"
                    },
                    dialog_tabs: {
                        dialog_tabs: "زبانه‌های گفتگو",
                        unknown: "همه",
                        channel: "کانال",
                        group: "گروه",
                        private: "شخصی",
                        bot: "بازو",
                        unread: "خوانده‌نشده"
                    }
                },
                notification: {
                    chat: {
                        title: "اعلان‌های گفتگو",
                        privates: "گفتگوهای شخصی",
                        groups: "گروه‌ها",
                        channels: "کانال‌ها",
                        bots: "بازو‌ها"
                    },
                    personal: {
                        title: "تنظیم اعلان",
                        mention_me: "اعلان در زمان نام بردن من",
                        message_preview: "پیش‌نمایش پیام"
                    },
                    no_access: "دسترسی به اعلان ها مسدود است."
                },
                privacy_and_security: {
                    privacy: "حریم خصوصی",
                    security: "امنیت",
                    privacy_and_security: "حریم خصوصی و امنیت",
                    contacts: {
                        title: "مخاطبین",
                        delete_synced_contacts: {
                            title: "حذف مخاطبین همگام‌سازی شده",
                            modal_title: "حذف مخاطبین",
                            modal_description_mobile: "با انجام این کار، مخاطبین \xabبله\xbb حذف می‌شوند. برای همگام‌سازی مجدد، به قسمت \xabمخاطبین\xbb بروید و گزینه \xabبه‌روزرسانی مخاطبین\xbb را انتخاب کنید.",
                            modal_description_desktop: "با انجام این کار، مخاطبین \xabبله\xbb حذف می‌شوند. برای همگام‌سازی مجدد، لطفاً از طریق اپلیکیشن اندروید اقدام کنید.",
                            modal_confirm_text: "حذف",
                            modal_cancel_text: "انصراف",
                            modal_error_title: "مخاطبین حذف نشدند.",
                            modal_error_description: "خطا در حذف مخاطبین. لطفاً دوباره تلاش کنید.",
                            modal_error_retry: "تلاش مجدد"
                        }
                    },
                    last_seen: "نمایش آخرین حضور من",
                    last_seen_modal_title: "چه کسانی بتوانند آخرین حضور شما را ببینند؟",
                    card_to_card_modal_title: "چه کسانی بتوانند برای شما کارت به کارت کنند؟",
                    invite_modal_title: "چه کسانی بتوانند شما را به گروه یا کانال دعوت کنند؟",
                    invite: "دعوت به گروه و کانال",
                    set_password: "تنظیم رمز عبور",
                    change_password: "تغییر رمز عبور",
                    card_to_card: "کارت به کارت",
                    end_sessions: "بستن حساب‌کاربری دستگاه‌های دیگر",
                    delete_account: "حذف حساب کاربری",
                    devices: "دستگاه‌ها",
                    nobody: "هیچکس",
                    all: "همه",
                    close: "بستن",
                    confirm: "تایید",
                    detected_devices: "دستگاه‌های شناسایی شده:",
                    active_device: "این دستگاه",
                    other_devices: "دستگاه‌های دیگر",
                    just_contacts: "فقط مخاطبین",
                    end_all_in_all_devices: "بستن حساب‌کاربری در دستگاه‌های دیگر",
                    are_you_sure_end_session: "آیا از بستن حساب‌کاربری در این دستگاه اطمینان دارید؟",
                    are_you_sure_end_all_sessions: "آیا از بستن حساب‌کاربری دستگاه‌های دیگر اطمینان دارید؟",
                    end_session_error_modal: {
                        title: "خطای بستن نشست",
                        title_for_all: "خطای بستن نشست‌ها",
                        general_description: "مشکلی در انجام درخواست شما پیش آمده است.",
                        forbidden_description: "به‌دلایل امنیتی، موقتاً امکان بستن حساب‌ ‌کاربری قدیمی‌تر توسط دستگاهی که به‌تازگی متصل شده‌اید، وجود ندارد.",
                        forbidden_description_for_all: "به‌دلایل امنیتی، موقتاً امکان بستن حساب‌های ‌کاربری قدیمی‌تر توسط دستگاهی که به‌تازگی متصل شده‌اید، وجود ندارد.",
                        i_got_it: "متوجه شدم"
                    },
                    delete_account_strings: {
                        delete_account_warning: "با حذف حساب کاربری:",
                        are_you_sure_title: "حذف حساب کاربری",
                        terminate_session_modal_title: "بستن حساب در این دستگاه",
                        are_you_sure: "آیا از حذف حساب‌کاربری خود اطمینان دارید؟",
                        delete_account_warning_description: " کلیه‌ی اطلاعات شما در “بله” حذف خواهد شد و به هیچ عنوان قابل برگشت نخواهد بود",
                        warnings: ["حذف اطلاعات حساب و تصاویر پروفایل", "حذف تمام پیام‌های متن٬عکس٬فیلم٬صوت", "حذف تمام پیام‌های بانکی و تاریخچه آن", "حذف شماره‌کارت‌ها و اطلاعات حساب بانکی", "حذف مخاطبین و اطلاعات تماس", "حذف کانالهایی که شما مالک آن هستید"],
                        code_block_title: "کد تایید حذف حساب کاربری",
                        input_label: "کد تایید",
                        resend_code: "ارسال مجدد کد",
                        delete_account_button: "حذف حساب",
                        time_left: "زمان باقی مانده: ",
                        time_seconds: " ثانیه",
                        error_modal: {
                            title: "عدم امکان حذف حساب کاربری",
                            description: "موجودی کیف پول شما {amount} هزار تومان است، برای حذف حساب کاربری، ابتدا موجودی کیف پول خود را برداشت کنید و سپس مجددا برای حذف حساب کاربری تلاش کنید.",
                            description_second_paragraph: "می‌توانید با موجودی کیف پول، شارژ، بستۀ اینترنتی و ... تهیه کنید."
                        }
                    },
                    password_description: "با فعال کردن رمز عبور هنگام باز کردن برنامه باید رمز مورد نظر که تنظیم کرده اید را وارد کنید. اگر رمزعبور را فراموش کنید باید برنامه را حذف و مجددا نصب کنید",
                    call_settings: {
                        title: "تماس",
                        description: "چه کسانی بتوانند با شما تماس بگیرند؟"
                    },
                    story_privacy: {
                        title: "حریم خصوصی ماجرا",
                        description: "چه کسانی بتوانند ماجرای شما را مشاهده کنند؟",
                        add_exception: "افزودن استثنا",
                        exception: {
                            title: "امکان افزودن استثنا",
                            description: "کاربران استثنا نمی‌توانند ماجرای شما را ببینند."
                        },
                        options: {
                            all: {
                                title: "همهٔ کاربران",
                                description: "همه می‌توانند با دسترسی به پروفایل شما ماجرایتان را ببینند."
                            },
                            except: {
                                title: "همهٔ مخاطبین به جز ...",
                                description: "این مخاطبین نمی‌توانند وضعیت شما را ببینند."
                            },
                            contacts: {
                                title: "مخاطبین",
                                description: "فقط مخاطبین‌تان ماجرای شما را می‌بینند.",
                                description_alt: "همهٔ مخاطبین‌تان وضعیت شما را می‌بینند."
                            },
                            just: {
                                title: "مخاطبین دلخواه",
                                description: "فقط مخاطبینی که انتخاب می‌کنید، ماجرای شما را می‌بینند.",
                                guide: "ماجرایتان با چه کسی به اشتراک گذاشته شود؟"
                            }
                        },
                        reply: "پاسخ‌دادن به ماجرای من",
                        note: "تغییراتی که در تنظیمات حریم خصوصی ماجرا اعمال می‌کنید، روی ماجرا‌هایی که قبلا به‌اشتراک گذاشته‌اید تاثیری نخواهند داشت.",
                        selectedCount: "{count} نفر انتخاب شده",
                        exceptionCount: "به‌جز {count} نفر انتخاب‌شده، سایرین ماجرای شما را می‌بینند."
                    },
                    story_link: {
                        title: "ماجرا",
                        description: "لطفا پیوند مورد نظر را وارد کنید"
                    },
                    blocked_user: {
                        title: "کاربران مسدود‌شده",
                        userType: {
                            contacts: "مخاطبین",
                            anonymous: "ناشناس",
                            bot: "بازو"
                        },
                        unblock: "رفع مسدودیت"
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=7010.68ccf0e3.js.map