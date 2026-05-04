try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7a58a5fa-4081-4ef0-9360-76f0c97f0e94", e._sentryDebugIdIdentifier = "sentry-dbid-7a58a5fa-4081-4ef0-9360-76f0c97f0e94")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["2987"], {
        92310: function(e, t, o) {
            o.r(t), o.d(t, {
                strings: () => r
            });
            var n = o(48629);
            o(27002);
            let r = {
                auth: {
                    entry: 'Login to "Bale"',
                    signUpDescription: "Enter your name",
                    account: "Account",
                    complete_you_account: "Complete your account",
                    name_help_text: "Your name can be English or Persian.",
                    enter_app: "Login to the app",
                    signUpErrors: {
                        empty: "Enter the name to activate the button.",
                        max_length: "It is not possible to write more than {number} characters.",
                        invalid_name_error: "The characters entered are not allowed.",
                        invalid_avatar: "It is not possible to load this photo."
                    },
                    signUpButtons: {
                        store: "Save"
                    },
                    signUpLinks: {
                        signUp: "Sign Up",
                        landingPicker: "Required Service"
                    },
                    choose_landing: "What service do you need?",
                    choose_landing_desc: "Choosing any of the following options will give you faster access to the content you want. You will also have access to other services.",
                    service_messaging: "Messaging",
                    service_messaging_desc: "Conversation, creating channels and groups and...",
                    service_flow: "Flow",
                    service_flow_desc: "Interesting content and channels, adventure and...",
                    service_my_bank: "Services",
                    service_my_bank_desc: "Banking Services, bill and mobile, bots and...",
                    enterApp: "Enter the App",
                    signUpInputTitle: "Name",
                    signUpPlaceholder: "Enter your name...",
                    signUpFeatures: {
                        chat: {
                            title: "Chat",
                            description: "Personal and group chat, calls, and more..."
                        },
                        flow: {
                            title: "Flow",
                            description: "Announcements for Arbaeen, interesting channels, and more..."
                        },
                        banking: {
                            title: "Services",
                            description: "Currency exchange for Arbaeen, card to card transactions, top-up, and more..."
                        },
                        transaction: {
                            title: "Transactions of Bank Melli Iran",
                            description: "Receive transactions from Bank Melli and financial management"
                        }
                    },
                    phoneEntranceDesc: "Please enter your country and mobile number.",
                    nextCodeTypeTimeRemaining: "Time until code retrieval via {type}",
                    otpTimeRemaining: "Time until entering the code",
                    nextCodeTypeRequestTitle: "Code retrieval via {type}:",
                    nextCodeTypeRequestButton: "Request {type}",
                    dosentRecievedCode: "Did not receive the code?",
                    otpType: {
                        [n.GS.AUTHSENDCODETYPE_DEFAULT]: "Default",
                        [n.GS.AUTHSENDCODETYPE_CALL]: "Call",
                        [n.GS.AUTHSENDCODETYPE_BALEONLY]: "Bale",
                        [n.GS.AUTHSENDCODETYPE_SMS]: "SMS",
                        [n.GS.AUTHSENDCODETYPE_TELEGRAM]: "Telegram",
                        [n.GS.AUTHSENDCODETYPE_USSD]: "USSD",
                        [n.GS.AUTHSENDCODETYPE_EMAIL]: "Email"
                    },
                    otpTypeDescription: {
                        [n.GS.AUTHSENDCODETYPE_BALEONLY]: 'Your *"Bale"* account login code was sent to the *number {phone} which is connected in another device*.',
                        [n.GS.AUTHSENDCODETYPE_DEFAULT]: 'Enter the login code received via *"Bale" app, call, or SMS*.',
                        [n.GS.AUTHSENDCODETYPE_CALL]: "Enter the login code you received through the *calling {phone}*.",
                        [n.GS.AUTHSENDCODETYPE_SMS]: "Enter the input code sent to *{phone}* by *SMS*.",
                        [n.GS.AUTHSENDCODETYPE_WHATSAPP]: 'The login code has been sent to "Bale" on *WhatsApp*. If access to WhatsApp is not available, receive the code via SMS after 120 seconds.',
                        [n.GS.AUTHSENDCODETYPE_UNKNOWN]: 'Enter the login code received via "Bale" app, call, or SMS.',
                        [n.GS.AUTHSENDCODETYPE_TELEGRAM]: "Enter the entry code that you received through the *Telegram bot* at the number *{phone}*.",
                        [n.GS.AUTHSENDCODETYPE_TELEGRAM_GATEWAY]: "Enter the entry code that you received through the *Telegram bot* at the number *{phone}*.",
                        [n.GS.AUTHSENDCODETYPE_USSD]: "Enter the login code you received through the *USSD* at *{phone}*."
                    },
                    otpAuthTypeGuide: "If access to the device is not available, after {time} seconds, receive the code via 'Request {otp_type}'.",
                    otpTypeBale: 'Your device connected to "Bale"',
                    somethingWentWrong: "An error occurred; please try again.",
                    phoneLimit: "It is not possible to log in with this number. Please try again later.",
                    timeLeft: "{time} seconds ",
                    resendCode: "Resend Code",
                    otpCode: "Login Code",
                    enter: "Enter",
                    invalidCode: "Incorrect code",
                    editPhone: "Edit Phone Number",
                    getNewCode: "Get New Code",
                    getNewCodeTitle: "to request a new code",
                    contextMenu: {
                        support: "Support",
                        help: "Help"
                    },
                    chooseCountry: "Select Country",
                    errors: {
                        PHONE_NUMBER_NOT_IN_TELEGRAM: "To receive the login code, you must have an account on Telegram with this number."
                    }
                },
                login: "Login",
                country_code_placeholder: "Search and select your desired country",
                country: "Country",
                mobile_phone_number: "Mobile number",
                phone_prefix_iran: "+98",
                submit: "Submit and Continue",
                back: "Back",
                i_got_it: "Got it",
                error_empty_phone_number: "Mobile number cannot be empty.",
                error_login_title: "Unable to login to the account",
                error_user_is_deleted: "Login is not possible. Your account has been blocked due to a violation of program usage rules.",
                login_bottomsheet_description: 'To get the login code for "Bale", enter the Telegram bot with the same number.',
                telegram_bot: {
                    title: "Receive the code from the 'Bale' bot in Telegram",
                    description: "To get the login code for 'Bale', enter the Telegram bot with the same number.",
                    confirmBtn: "Telegram bot",
                    LoginBtn: "Open Telegram bot",
                    cancelBtn: "Cancel"
                },
                loginDescription: '"Bale" banking messenger allows you to chat and pay.',
                rulesText: {
                    first_section: "Choosing the option to log in means accepting the",
                    second_section: "term of use and privacy.",
                    third_section: ""
                },
                error_invalid_code: "Incorrect code entered.",
                error_invalid_phone_number: "Incorrect mobile number entered.",
                error_code_send_not_successful: "Code sending was not successful.",
                signup_register: "Sign Up",
                signup_user_name: "Name",
                signup_error_empty_user_name: "Enter your name",
                second: "Second",
                phone_number_placeholder: "9123456789",
                two_fa: {
                    title: "Two-Step Verification",
                    description: "You can set a password that will be required when log into your account in addition to the code you get via SMS.",
                    changePassword: "Change Password",
                    disablePassword: "Disable Password",
                    removePassword: "Remove Password",
                    changeRecoveryEmail: "Change Recovery Email",
                    next: "Set Password",
                    errors: {
                        InvalidPassword: "‌The password entered is not valid.",
                        TooShortPassword: "The entered password must be at least {character} characters.",
                        TooShortCode: "The entered code must be at least {character} characters.",
                        NotSame: "‌Passwords are not the same.",
                        InvalidEmail: "The email entered is not valid.",
                        InvalidCode: "The password entered is incorrect."
                    },
                    dialogs: {
                        Success: {
                            title: "Password registered successfully.",
                            description: "You can set a password that will be required when log into your account in addition to the code you get via SMS.",
                            confirmText: "I got it"
                        },
                        Failed: {
                            title: "The password wasn't changed.",
                            description: "The password wasn't changed. please try again.",
                            confirmText: "Try again"
                        },
                        Disable: {
                            title: "Disable Password",
                            description: "Are you sure you want to disable your password?",
                            confirmText: "Disable",
                            cancelText: "Cancel"
                        },
                        SuccessChangePassword: {
                            title: "Password changed successfully.",
                            description: "By creating a password, you will be required to enter a password in addition to the code via SMS when logging into your account.",
                            confirmText: "Back"
                        },
                        FailedChangePassword: {
                            title: "The password was not changed.",
                            description: "The password was not changed. Please try again.",
                            confirmText: "Back to setting"
                        },
                        SessionExpire: {
                            title: "Your session has timed out.",
                            description: "You must re-enter the password to be authenticated.",
                            confirmText: "I understand"
                        }
                    },
                    SetPassword: {
                        title: "Set Password",
                        description: "Enter your desired password.",
                        placeholder: "12345678",
                        label: "Password",
                        next: "Confirm and continue"
                    },
                    RePassword: {
                        title: "Re-enter password",
                        description: "Enter your password again.",
                        placeholder: "12345678",
                        label: "Re-enter password",
                        next: "Confirm and continue"
                    },
                    RecoveryEmail: {
                        title: "Recovery Email",
                        description: "If you forget the password, you can use the entered email.",
                        placeholder: "test.wer@gmail.com",
                        label: "Email",
                        next: "Confirm and continue"
                    },
                    CodeEmail: {
                        title: "Verification Code",
                        description: "Enter the code sent to {email}",
                        placeholder: "123456",
                        label: "Verification Code",
                        next: "Confirm"
                    },
                    VerifyPassword: {
                        title: "Password",
                        description: "Two-step verification is enabled for you. Enter your password to login.",
                        placeholder: "12345678",
                        label: "Password",
                        next: "Login",
                        textButton: "Forgot your password?",
                        textButton2: "Remove password"
                    }
                },
                suspend_user: {
                    title: "Limited user account",
                    titleProfile: "Suspended",
                    descriptions: "Your account has been suspended. To resolve the issue, please visit {link}."
                },
                installGuide: {
                    title: "Install the 'Bale' Web Application",
                    selectIt: "Select it.",
                    click: "Click",
                    add: "Add",
                    a2h: "Add to Home Screen",
                    install: "Install",
                    installApp: "Install App",
                    firstUp: "1- On the top bar of the phone, press",
                    firstDown: "1- On the bottom bar of the phone, press",
                    secondSafari: "2- Scroll up the opened menu and press",
                    firstSafariDesktop: "1- On the top bar of the page, click on the web address bar.",
                    secondSafariDesktop: "2- Drag the address and drop it on the desktop.",
                    thirdSafari: "3- At the top of the page, press",
                    secondMobile: "2- In the opened menu, press",
                    firstChromeDesktop: "1- On the top bar of the page, on the right side of the address bar, press",
                    secondChromeDesktop: "2- In the opened dialog, press",
                    firstFireDesktop: "On the top bar of the page, press",
                    firstFireDesktopPart2: "next to the website address, drag and drop it on the desktop."
                },
                save: "Save"
            }
        }
    }
]);
//# sourceMappingURL=2987.1383cd3e.js.map