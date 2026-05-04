try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9e0694fc-f01d-4ecb-b06f-46af52167284", e._sentryDebugIdIdentifier = "sentry-dbid-9e0694fc-f01d-4ecb-b06f-46af52167284")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["8069"], {
        99620: function(e, t, i) {
            i.r(t), i.d(t, {
                strings: () => o
            });
            var n = i(48629);
            i(27002);
            let o = {
                auth: {
                    entry: "ورود به \xabبله\xbb",
                    signUpDescription: "نام خود را وارد کنید",
                    account: "حساب کاربری",
                    complete_you_account: "حساب کاربری خود را کامل کنید.",
                    name_help_text: "نام شما می‌تواند انگلیسی یا فارسی باشد.",
                    enter_app: "ورود به برنامه",
                    signUpErrors: {
                        empty: "برای فعال شدن دکمه، نام را وارد کنید.",
                        max_length: "امکان نوشتن بیشتر از {number} کاراکتر وجود ندارد.",
                        invalid_name_error: "کاراکترهای وارد‌شده غیرمجاز است.",
                        invalid_avatar: "امکان بارگذاری این عکس وجود ندارد."
                    },
                    signUpButtons: {
                        store: "ذخیره"
                    },
                    signUpLinks: {
                        signUp: "ثبت‌نام",
                        landingPicker: "خدمت مورد نیاز"
                    },
                    choose_landing: "خدمت مورد نیاز شما چیست؟",
                    choose_landing_desc: "انتخاب هر یک از گزینه‌های زیر باعث دسترسی سریع‌تر شما به محتوای مورد نظرتان می‌شود. شما به سایر خدمات هم دسترسی خواهید داشت.",
                    service_messaging: "پیام‌رسانی",
                    service_messaging_desc: "گفتگو، ساخت کانال و گروه و...",
                    service_flow: "جریان",
                    service_flow_desc: "محتواها و کانال‌های جذاب، ماجرا و ...",
                    service_my_bank: "خدمات",
                    service_my_bank_desc: "خدمات بانکی، قبض و موبایل، ‌بازوها و ...",
                    enterApp: "ورود به برنامه",
                    signUpInputTitle: "نام",
                    signUpPlaceholder: "نام خود را وارد کنید...",
                    signUpFeatures: {
                        chat: {
                            title: "گفتگو",
                            description: "گفتگوی شخصی و گروهی، تماس و..."
                        },
                        flow: {
                            title: "جریان",
                            description: "اعلام وضعیت اربعین، کانال‌های جذاب و..."
                        },
                        banking: {
                            title: "خدمات",
                            description: "خرید ارز اربعین، کارت به کارت، شارژ و..."
                        },
                        transaction: {
                            title: "تراکنش‌های بانک ملّی ایران",
                            description: "دریافت تراکنش‌های بانک ملّی و مدیریت مالی"
                        }
                    },
                    phoneEntranceDesc: "لطفا کشور و شمارهٔ همراه خود را وارد کنید.",
                    nextCodeTypeTimeRemaining: "تا دریافت کد از طریق {type}",
                    otpTimeRemaining: "تا وارد کردن کد ورود",
                    nextCodeTypeRequestTitle: "دریافت کد از طریق {type}:",
                    nextCodeTypeRequestButton: "درخواست {type}",
                    dosentRecievedCode: "کد را دریافت نکرده‌اید؟",
                    otpType: {
                        [n.GS.AUTHSENDCODETYPE_DEFAULT]: "دیفالت",
                        [n.GS.AUTHSENDCODETYPE_CALL]: "تماس",
                        [n.GS.AUTHSENDCODETYPE_BALEONLY]: "بله",
                        [n.GS.AUTHSENDCODETYPE_SMS]: "پیامک",
                        [n.GS.AUTHSENDCODETYPE_TELEGRAM]: "تلگرام",
                        [n.GS.AUTHSENDCODETYPE_USSD]: "USSD",
                        [n.GS.AUTHSENDCODETYPE_EMAIL]: "ایمیل"
                    },
                    otpTypeDescription: {
                        [n.GS.AUTHSENDCODETYPE_BALEONLY]: "کد ورود به *حساب بله شما به شمارهٔ {phone} که در دستگاه دیگری* متصل است، ارسال شد.",
                        [n.GS.AUTHSENDCODETYPE_DEFAULT]: "کد ورودی که از طریق اپلیکیشن \xabبله\xbb، تماس یا پیامک دریافت کرده‌اید را وارد کنید.",
                        [n.GS.AUTHSENDCODETYPE_CALL]: "کد ورودی که از طریق *تماس* به شمارهٔ *{phone}* دریافت کرده‌اید را وارد کنید.",
                        [n.GS.AUTHSENDCODETYPE_SMS]: "کد ورودی که به شمارهٔ *{phone} پیامک* شده است را وارد کنید.",
                        [n.GS.AUTHSENDCODETYPE_WHATSAPP]: "کد ورود به \xabبله\xbb، در *واتس‌اپ (WhatsApp)* برای شما ارسال شد. در صورت عدم دسترسی به واتس‌اپ، بعد از ۱۲۰ ثانیه، کد را از طریق \xabپیامک\xbb دریافت کند.",
                        [n.GS.AUTHSENDCODETYPE_UNKNOWN]: "کد ورودی که از طریق اپلیکیشن \xabبله\xbb، تماس یا پیامک دریافت کرده‌اید را وارد کنید.",
                        [n.GS.AUTHSENDCODETYPE_TELEGRAM]: "کد ورودی که از طریق *بات تلگرام* به شمارهٔ *{phone}* دریافت کرده‌اید را وارد کنید.",
                        [n.GS.AUTHSENDCODETYPE_TELEGRAM_GATEWAY]: "کد ورودی که از طریق *بات تلگرام* به شمارهٔ *{phone}* دریافت کرده‌اید را وارد کنید.",
                        [n.GS.AUTHSENDCODETYPE_USSD]: "کد ورودی که از طریق *USSD* به شمارهٔ *{phone}* دریافت کرده‌اید را وارد کنید."
                    },
                    otpAuthTypeGuide: "در صورت عدم دسترسی به دستگاه، بعد از {time} ثانیه از طریق \xabدرخواست {otp_type}\xbb کد را دریافت کنید.",
                    otpTypeBale: "دستگاه‌ متصل‌تان‌ به \xabبله‌\xbb",
                    somethingWentWrong: "خطایی رخ داده است، لطفا دوباره تلاش کنید.",
                    phoneLimit: "امکان ورود با این شماره وجود ندارد. لطفا بعدا تلاش کنید.",
                    timeLeft: "{time} ثانیه ",
                    resendCode: "ارسال دوباره کد",
                    otpCode: "کد ورود",
                    enter: "ورود",
                    invalidCode: "کد اشتباه است",
                    editPhone: "ویرایش شمارهٔ همراه",
                    getNewCode: "دریافت کد جدید",
                    getNewCodeTitle: "تا درخواست کد جدید",
                    contextMenu: {
                        support: "پشتیبانی",
                        help: "راهنما"
                    },
                    chooseCountry: "انتخاب کشور",
                    errors: {
                        PHONE_NUMBER_NOT_IN_TELEGRAM: "برای دریافت کد ورود، باید با همین شماره در تلگرام حساب کاربری داشته باشید."
                    }
                },
                login: "ورود",
                country_code_placeholder: "کشور مورد نظر خود را جستجو و یا انتخاب کنید",
                country: "کشور",
                mobile_phone_number: "شماره همراه",
                phone_prefix_iran: "+98",
                submit: "تایید و ادامه",
                back: "بازگشت",
                i_got_it: "متوجه شدم",
                error_empty_phone_number: "شماره همراه نمی‌تواند خالی باشد.",
                phone_number_placeholder: "۹۱۲۳۴۵۶۷۸۹",
                error_login_title: "عدم امکان ورود به حساب‌کاربری",
                error_user_is_deleted: "ورود ممکن نیست. حساب کاربری شما به علت نقض قوانین استفاده از برنامه مسدود شده است.",
                login_bottomsheet_description: "برای دریافت کد ورود \xabبله\xbb، می‌توانید از گزینه‌های زیر استفاده کنید.",
                telegram_bot: {
                    title: "دریافت کد از بات \xabبله\xbb در تلگرام",
                    description: "برای دریافت کد ورود به \xabبله\xbb، وارد بات \xabبله\xbb در تلگرام با همین شماره شوید.",
                    confirmBtn: "ورود به بات",
                    LoginBtn: "ورود به بات تلگرام",
                    cancelBtn: "انصراف"
                },
                loginDescription: "پیام‌رسان بانکی بله، امکان گفتگو و پرداخت را برای شما فراهم می‌کند.",
                rulesText: {
                    first_section: "انتخاب گزینهٔ ورود به منزلهٔ پذیرفتن",
                    second_section: " قوانین استفاده و حریم خصوصی ",
                    third_section: "می‌باشد."
                },
                error_invalid_code: "کد وارد شده اشتباه است.",
                error_invalid_phone_number: "شماره همراه اشتباه وارد شده است.",
                error_code_send_not_successful: "ارسال کد ناموفق بود.",
                signup_register: "ثبت نام",
                signup_user_name: "نام",
                signup_error_empty_user_name: "نام خود را وارد کنید",
                second: "ثانیه",
                two_fa: {
                    title: "تایید دو مرحله‌ای",
                    description: "با ایجاد رمز عبور، در هنگام ورود به حساب کاربری‌تان  علاوه‌بر کد از طریق پیامک، وارد کردن رمز عبور الزامی است.",
                    changePassword: "تغییر رمز عبور",
                    disablePassword: "غیرفعال کردن رمز عبور",
                    removePassword: "حذف رمز عبور",
                    changeRecoveryEmail: "تغییر ایمیل بازیابی",
                    next: "ایجاد رمز عبور",
                    errors: {
                        TooShortPassword: "رمز عبور واردشده باید حداقل {character} کاراکتر باشد.",
                        TooShortCode: "کد واردشده باید حداقل {character} کاراکتر باشد.",
                        NotSame: "‌رمز عبورها با هم، یکسان نیستند.",
                        InvalidEmail: "ایمیل وارد‌شده معتبر نیست.",
                        InvalidCode: "کد وارد شده اشتباه است.",
                        InvalidPassword: "‌رمز عبور‌ وارد‌شده معتبر نیست."
                    },
                    dialogs: {
                        Success: {
                            title: "رمز عبور با موفقیت ثبت شد.",
                            description: "با ایجاد رمز عبور، در هنگام ورود به حساب کاربری خود، علاوه‌بر کد از طریق پیامک، وارد کردن رمز عبور الزامی است.",
                            confirmText: "متوجه شدم"
                        },
                        Failed: {
                            title: "رمز عبور ثبت نشد.",
                            description: "رمز عبور ثبت نشد. لطفا دوباره تلاش کنید.",
                            confirmText: "تلاش مجدد"
                        },
                        Disable: {
                            title: "غیرفعال کردن رمز عبور",
                            description: "آیا از غیرفعال کردن رمز عبور خود اطمینان دارید؟",
                            confirmText: "غیرفعال",
                            cancelText: "انصراف"
                        },
                        SuccessChangePassword: {
                            title: "رمز عبور با موفقیت تغییر داده شد.",
                            description: "با ایجاد رمز عبور، در هنگام ورود به حساب کاربری خود، علاوه‌بر کد از طریق پیامک، وارد کردن رمز عبور الزامی است.",
                            confirmText: "برگشت"
                        },
                        FailedChangePassword: {
                            title: "رمز عبور تغییر داده نشد.",
                            description: "رمز عبور تغییر داده نشد. لطفا دوباره تلاش کنید.",
                            confirmText: "بازگشت به تنظیمات"
                        },
                        SessionExpire: {
                            title: "زمان محرز بودن شما به پایان رسیده است.",
                            description: "باید دوباره رمز را وارد کنید که احراز بشوید.",
                            confirmText: "متوجه شدم"
                        }
                    },
                    SetPassword: {
                        title: "ایجاد رمز عبور",
                        description: "رمز عبور مورد نظر خود را وارد کنید.",
                        placeholder: "۱۲۳۴۵۶۷۸",
                        label: "رمز عبور",
                        next: "تایید و ادامه"
                    },
                    RePassword: {
                        title: "تکرار رمز عبور",
                        description: "تکرار رمز عبور خود را وارد کنید.",
                        placeholder: "۱۲۳۴۵۶۷۸",
                        label: "تکرار رمز عبور",
                        next: "تایید و ادامه"
                    },
                    RecoveryEmail: {
                        title: "ایمیل بازیابی",
                        description: "در صورت فراموشی رمز عبور، می‌توانید از ایمیل وارد‌شده استفاده کنید.",
                        placeholder: "emailaddress@email.com",
                        label: "ایمیل",
                        next: "تایید و ادامه"
                    },
                    CodeEmail: {
                        title: "کد تایید",
                        description: "کد ارسال شده به ایمیل {email} را وارد کنید. بخش اسپم ایمیل خود را نیز بررسی کنید.",
                        placeholder: "۱۲۳۴۵۶",
                        label: "کد تایید",
                        next: "تایید"
                    },
                    VerifyPassword: {
                        title: "رمز عبور",
                        description: "تایید دو مرحله‌ای برای شما فعال است. برای ورود رمز عبور خود را وارد کنید.",
                        placeholder: "۱۲۳۴۵۶۷۸",
                        label: "رمز عبور",
                        next: "ورود",
                        textButton: "رمز عبور خود را فراموش کرده‌اید؟",
                        textButton2: "حذف رمز عبور"
                    }
                },
                suspend_user: {
                    title: "حساب کاربری مسدود شده",
                    titleProfile: "تعلیق شده",
                    descriptions: "حساب کاربری شما مسدود شده است. جهت رفع مسدودیت حساب کاربری به آدرس {link} مراجعه کنید."
                },
                installGuide: {
                    title: "نصب نسخهٔ وب اپلیکیشن \xabبله\xbb",
                    selectIt: "را انتخاب کنید.",
                    click: "کلیک کنید.",
                    add: "Add",
                    a2h: "Add to Home Screen",
                    install: "Install",
                    installApp: "Install App",
                    firstUp: "۱- در نوار بالای گوشی، دکمهٔ",
                    firstDown: "۱- در نوار پایین گوشی، دکمهٔ",
                    secondSafari: "۲- منوی باز شده را به بالا اسکرول کنید و دکمهٔ",
                    firstSafariDesktop: "۱- در نوار بالای صفحه روی آدرس بار وبسایت کلیک کنید.",
                    secondSafariDesktop: "۲- آدرس را با موس بکشید و روی دسکتاپ رها کنید.",
                    thirdSafari: "۳- در بالای صفحه، دکمهٔ",
                    secondMobile: "۲- در منوی باز شده دکمهٔ",
                    firstChromeDesktop: "۱- در نوار بالای صفحه، سمت راست آدرس‌بار، روی دکمهٔ",
                    secondChromeDesktop: "۲- در دیالوگ باز شده روی دکمهٔ",
                    firstFireDesktop: "در نوار بالای صفحه، دکمهٔ",
                    firstFireDesktopPart2: "که در کنار آدرس وبسایت قرار دارد را بکشید و روی دسکتاپ رها کنید."
                },
                save: "ذخیره"
            }
        }
    }
]);
//# sourceMappingURL=8069.6d9ec832.js.map