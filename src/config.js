const texts = {
    EN: {
        Header: {
            text: "Contact Us",
        },
        BottomNav: {
            benefits: "Advantages",
            menu: "Menu",
            product: "Product",
            forStreamers: "For Streamers",
            faq: "FAQ",
            register: "Register",
        },
        Hero: {
            title: "Monetize your traffic",
            subtitle: "With a direct advertiser of iGaming products",
        },
        Form: {
            title: "Join Us",
            companyNamePlaceholder: "Company Name",
            emailPlaceholder: "Email",
            phonePlaceholder: "Phone Number",
            searchBarPlaceholder: "Search",
            passwordPlaceholder: "Password",
            repeatPasswordPlaceholder: "Repeat Password",
            agreementServices: "I agree",
            rulesAgreement: "services and policies",
        },
        Benefits: {
            title: "Our Benefits",
            benefitFirst: "Weekly payouts",
            benefitSecond: "Personal manager",
            benefitThird: "Custom creatives",
            benefitFourth: "Apps for rent",
            productCardTitleFirst: "New Products",
            productCardDescriptionFirst: "Take advantage of an empty base of gambling and betting offers with a top reg2dep conversion rate of 20-50% for effective monetization",
            productCardTitleSecond: "Transparent Statistics",
            productCardDescriptionSecond: "Track traffic quality in the affiliate program and optimize advertising campaigns to maximize profit",
            productCardTitleThird: "In-house Development",
            productCardDescriptionThird: "Allows us to continuously develop products tailored to the needs of a rapidly changing market and demonstrate stable growth",
        },
    },
    RU: {
        Header: {
            text: "Связаться",
        },
        BottomNav: {
            benefits: "Преимущества",
            product: "Продукт",
            menu: "Меню",
            forStreamers: "Стримерам",
            faq: "FAQ",
            register: "Зарегистрироваться",
        },
        Hero: {
            title: "Монетизируй свой трафик",
            subtitle: "С прямым рекламодателем iGaming продуктов",
        },
        Form: {
            title: "Присоединяйся",
            companyNamePlaceholder: "Название компании",
            emailPlaceholder: "Емейл",
            searchBarPlaceholder: "Поиск",
            phonePlaceholder: "Номер телефона",
            passwordPlaceholder: "Пароль",
            repeatPasswordPlaceholder: "Ещё раз",
            agreementServices: "Я принимаю",
            rulesAgreement: "правила и условия",
        },
        Benefits: {
            title: "Наши преимущества",
            benefitFirst: "Выплаты каждую неделю",
            benefitSecond: "Личный менеджер",
            benefitThird: "Кастомные креативы",
            benefitFourth: "Приложения в аренду",
            productCardTitleFirst: "Новые продукты",
            productCardDescriptionFirst: "Воспользуйся преимуществом пустой базы гемблинг и беттинг офферов при " +
                "топовом" +
                " конверте reg2dep 20-50% для эффективной монетизации",
            productCardTitleSecond: "Прозрачная статистика",
            productCardDescriptionSecond: "Отслеживай качество трафика в партнерской программе и оптимизируй " +
                "рекламные " +
                "кампании, чтобы получить максимальный профит",
            productCardTitleThird: "Собственная разработка",
            productCardDescriptionThird: "Позволяет нам нон-стоп развивать продукты под потребности быстро" +
                " меняющегося рынка и показывать стабильный рост",
        },
        Product: {
            title: "Продукт",
            description: "Партнерская программа LVLX является прямым рекламодателем iGaming продуктов и предоставляет офферы на онлайн-казино и БК",
            plusOne: "In-house колл-центр",
            plusTwo: "VIP программа",
            plusThree: "KZ, RU, TR, IN",
            plusFour: "Лицензия Anjouan",
            plusFive: "Reg2dep 20-50%",
            plusSix: "Экспертная поддержка",
        },
        ForStreamers: {
            description: "Партнерка LVLX предлагает индивидуальные условия сотрудничества для стримеров, включающие различные модели оплаты: RevShare, CPA, Hybrid, FIX для достижения крутого win-win результата",
            title: "Стримерам",
            plusOne: "Уникальные бонусы",
            plusTwo: "Конвертящие промо",
            plusThree: "Быстрые выплаты",
            registrations: "регистрации",
            earnings: "доход",
            deposits: "депозитов",
            visits: "посещений",
            bacomeStreamer: "Стать стримером",
        },
        Faq: {
            title: "FAQ",
            questionOne: "Как начать сотрудничество?",
            answerOne: "Заполните форму на сайте, и наш менеджер свяжется с вами в ближайшее время",
            questionTwo: "Какой минимальный депозит?",
            answerTwo: "Минимальный депозит зависит от выбранной вами модели оплаты. Свяжитесь с вашим менеджером для получения подробной информации",
            questionThree: "Какой минимальный вывод?",
            answerThree: "Минимальная сумма вывода составляет 100$",
            questionFour: "Как быстро обрабатываются выплаты?",
            answerFour: "Выплаты обрабатываются в течение 3-х рабочих дне��",
        },
        Footer: {
            text: "Монетизируй свой трафик с прямым рекламодателем iGaming продуктов.",
            email: "Электронная почта",
            register: "Зарегистрироваться",
            allRightsReserved: "2025 Все права защищены. Несанкционированное воспроизведение, публикация, передача или любая другая форма копирования строго запрещены.",
        }
    },
};

export const getTextByLanguage = () => {
    const selectedLanguage = localStorage.getItem("selectedLanguageLVLX") || "RU";
    return texts[selectedLanguage];
};