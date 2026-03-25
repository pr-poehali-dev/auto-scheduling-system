export type Lang = "en" | "ru"

export const translations = {
  en: {
    nav: {
      home: "Home",
      works: "Works",
      style: "Style",
      about: "About",
      contact: "Contact",
      cta: "Contact",
    },
    hero: {
      badge: "Art by a monkey 🐒",
      title: "Chempszze Art",
      subtitle:
        "A monkey who paints. Not just any monkey — an artist with a brush, a vision, and absolutely no rules. Raw. Colorful. Unpredictable.",
      cta1: "See the Works",
      cta2: "About the Artist",
      scroll: "Scroll right",
    },
    works: {
      title: "Works",
      subtitle: "/ Selected paintings",
      items: [
        {
          number: "01",
          title: "Composition No. 1",
          category: "Abstract / Gouache on paper",
          year: "1951",
          description:
            "Congo's very first documented work. Created at age 2 at the London Zoo under the guidance of zoologist Desmond Morris. Bold sweeping strokes of red and orange — a debut that shocked the art world.",
        },
        {
          number: "02",
          title: "Fan Series",
          category: "Tempera / Fan composition",
          year: "1954",
          description:
            "Congo's most iconic series — radial fan-like compositions that he created instinctively, always stopping before crossing the boundary of the canvas. Pablo Picasso kept one of these on his studio wall.",
        },
        {
          number: "03",
          title: "Sold at Bonhams",
          category: "Mixed media / Historic sale",
          year: "1957",
          description:
            "In 2005 at the Bonhams auction, three of Congo's paintings sold for £14,400 — beating works by Andy Warhol and Renoir in the same sale. The buyer: an anonymous American collector.",
        },
        {
          number: "04",
          title: "Red Burst",
          category: "Abstract Expressionism / Acrylic",
          year: "1955",
          description:
            "Violent reds and deep ochre in a single session. Desmond Morris noted Congo would refuse to continue painting once he felt a work was complete — a behavior unprecedented in animal art studies.",
        },
        {
          number: "05",
          title: "Blue Period",
          category: "Gouache / Experimental",
          year: "1956",
          description:
            "One of the rare blue-dominant works. Congo showed a clear personal preference for warm tones, making this piece a fascinating anomaly. It was studied by scientists at the London Institute for Art Psychology.",
        },
        {
          number: "06",
          title: "The Last Canvas",
          category: "Mixed media / Final works",
          year: "1964",
          description:
            "Congo passed away in 1964 at age 10. His final paintings were donated to the Royal College of Art. Over his lifetime he produced approximately 400 paintings and drawings — every single one signed with a pawprint.",
        },
      ],
    },
    style: {
      title: "Style",
      subtitle: "/ The artistic approach",
      items: [
        {
          title: "Abstract Painting",
          description:
            "No rules, no borders. Pure emotion translated into color and form on canvas. Chempszze doesn't paint what is seen — only what is felt deep inside the jungle mind.",
        },
        {
          title: "Expressive Brushwork",
          description:
            "Every stroke tells a story. Wild, fast, instinctive — the way monkeys do it best. There is no hesitation on the canvas, only the pure momentum of creative fury.",
        },
        {
          title: "Color Theory (Ignored)",
          description:
            "Why follow theory when you can make your own? Bold contrasts and surprising palettes emerge from pure instinct. The color wheel is just a suggestion.",
        },
        {
          title: "Mixed Media",
          description:
            "Acrylic, oil, banana peels — anything goes when creativity has no limits. Every texture tells a different story, every material adds a new layer of meaning.",
        },
      ],
    },
    about: {
      title: "Meet\nCongo\nthe artist",
      p1: "Congo (1954–1964) was a chimpanzee who became one of the most famous animal artists in history. Discovered by zoologist Desmond Morris at London Zoo, Congo painted over 400 works in his short 10-year life.",
      p2: "His style — bold, fan-like strokes with instinctive color choice — attracted the attention of Pablo Picasso and Salvador Dalí, both of whom owned his works. In 2005, three of his paintings sold at Bonhams for £14,400, beating Warhol and Renoir.",
      p3: "Congo always stopped painting when he felt a piece was finished. If the brush was taken away too early, he would scream in protest. If it was given back after completion — he refused to touch the canvas again.",
      p4: "Desmond Morris documented Congo's creative process meticulously. He noticed that Congo consistently created symmetrical compositions and maintained a clear sense of visual balance — without ever being taught. Scientists argued for years whether this was true artistic intention or trained behavior. The canvases suggested the former.",
      p5: "Congo died in 1964 from tuberculosis, aged 10. He never knew that his paintings would one day hang in galleries, be studied in universities, and outsell some of the greatest human artists at auction. He just painted because he wanted to.",
      stats: [
        { value: "400+", label: "Paintings", sublabel: "Created between 1956–1964" },
        { value: "£14,400", label: "Auction record", sublabel: "Bonhams, London, 2005" },
        { value: "2", label: "Famous collectors", sublabel: "Picasso & Dalí owned his works" },
      ],
      cta1: "Get in Touch",
      cta2: "See the Works",
    },
    contact: {
      title: "Let's\ntalk",
      subtitle: "/ Get in touch with the monkey",
      location: "Somewhere in the jungle",
      socials: ["Instagram", "Twitter", "TikTok", "Behance"],
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        messagePlaceholder: "Tell the monkey something...",
        submit: "Send Message",
        submitting: "Sending...",
        success: "Message sent! 🐒",
      },
    },
  },
  ru: {
    nav: {
      home: "Главная",
      works: "Работы",
      style: "Стиль",
      about: "О нас",
      contact: "Контакт",
      cta: "Написать",
    },
    hero: {
      badge: "Искусство от обезьяны 🐒",
      title: "Chempszze Art",
      subtitle:
        "Обезьяна, которая рисует. Не просто обезьяна — художник с кистью, видением и полным отсутствием правил. Сырое. Красочное. Непредсказуемое.",
      cta1: "Смотреть работы",
      cta2: "Об художнике",
      scroll: "Листайте вправо",
    },
    works: {
      title: "Работы",
      subtitle: "/ Избранные картины",
      items: [
        {
          number: "01",
          title: "Композиция №1",
          category: "Абстракция / Гуашь на бумаге",
          year: "1951",
          description:
            "Первая задокументированная работа Конго. Создана в возрасте 2 лет в Лондонском зоопарке под наблюдением зоолога Десмонда Морриса. Смелые взмахи красного и оранжевого — дебют, потрясший мир искусства.",
        },
        {
          number: "02",
          title: "Серия «Веер»",
          category: "Темпера / Веерная композиция",
          year: "1954",
          description:
            "Самая знаменитая серия Конго — радиальные, веерообразные композиции, которые он создавал инстинктивно, всегда останавливаясь у края холста. Пабло Пикассо хранил одну из этих работ у себя в мастерской.",
        },
        {
          number: "03",
          title: "Продано на Bonhams",
          category: "Смешанная техника / Исторический аукцион",
          year: "1957",
          description:
            "В 2005 году на аукционе Bonhams три картины Конго ушли за £14 400 — обогнав работы Энди Уорхола и Ренуара. Покупатель: неизвестный американский коллекционер.",
        },
        {
          number: "04",
          title: "Красный взрыв",
          category: "Абстрактный экспрессионизм / Акрил",
          year: "1955",
          description:
            "Яростные красные и глубокая охра, написанные за один сеанс. Десмонд Моррис отмечал: Конго отказывался продолжать работу, когда считал её завершённой — поведение, не имевшее прецедента в истории зоопсихологии.",
        },
        {
          number: "05",
          title: "Голубой период",
          category: "Гуашь / Эксперимент",
          year: "1956",
          description:
            "Одна из редких работ с преобладанием синего. Конго явно предпочитал тёплые тона, поэтому эта картина — загадка. Она изучалась учёными Лондонского института психологии искусства.",
        },
        {
          number: "06",
          title: "Последний холст",
          category: "Смешанная техника / Последние работы",
          year: "1964",
          description:
            "Конго умер в 1964 году в возрасте 10 лет. Его последние картины были переданы Королевскому колледжу искусств. За свою жизнь он создал около 400 работ — каждая подписана отпечатком лапы.",
        },
      ],
    },
    style: {
      title: "Стиль",
      subtitle: "/ Художественный подход",
      items: [
        {
          title: "Абстрактная живопись",
          description:
            "Никаких правил, никаких границ. Чистая эмоция, переведённая в цвет и форму. Чемпшзз рисует не то, что видит — только то, что чувствует в глубине своего обезьяньего разума.",
        },
        {
          title: "Экспрессивные мазки",
          description:
            "Каждый штрих рассказывает историю. Дикий, быстрый, инстинктивный — именно так делают обезьяны. На холсте нет колебаний — только чистая энергия творческого порыва.",
        },
        {
          title: "Теория цвета (проигнорирована)",
          description:
            "Зачем следовать теории, когда можно создать свою? Смелые контрасты и неожиданные палитры рождаются из чистого инстинкта. Цветовой круг — это всего лишь подсказка.",
        },
        {
          title: "Смешанные техники",
          description:
            "Акрил, масло, банановая кожура — всё в ход, когда творчество не знает границ. Каждая текстура рассказывает разную историю, каждый материал добавляет новый слой смысла.",
        },
      ],
    },
    about: {
      title: "Знакомьтесь:\nКонго —\nхудожник",
      p1: "Конго (1954–1964) — шимпанзе, ставший одним из самых известных художников-животных в истории. Открыт зоологом Десмондом Моррисом в Лондонском зоопарке, за свою 10-летнюю жизнь он создал более 400 работ.",
      p2: "Его стиль — смелые веерообразные мазки с интуитивным выбором цвета — привлёк Пабло Пикассо и Сальвадора Дали, оба владели его работами. В 2005 году три картины Конго ушли на аукционе Bonhams за £14 400, обогнав Уорхола и Ренуара.",
      p3: "Конго всегда сам решал, когда картина готова. Если кисть забирали раньше времени — кричал. Если возвращали после завершения — отказывался прикасаться к холсту. Это называется художественная интуиция.",
      p4: "Десмонд Моррис тщательно документировал творческий процесс Конго. Он заметил, что тот неизменно создавал симметричные композиции и соблюдал визуальный баланс — без какого-либо обучения. Годами учёные спорили: настоящий ли это художественный умысел или выученное поведение. Холсты говорили в пользу первого.",
      p5: "Конго умер в 1964 году от туберкулёза в возрасте 10 лет. Он так и не узнал, что его картины окажутся в галереях, станут предметом изучения в университетах и на аукционах обгонят работы величайших художников-людей. Он просто рисовал — потому что хотел.",
      stats: [
        { value: "400+", label: "Картин", sublabel: "Создано с 1956 по 1964 год" },
        { value: "£14 400", label: "Рекорд аукциона", sublabel: "Bonhams, Лондон, 2005" },
        { value: "2", label: "Известных коллекционера", sublabel: "Пикассо и Дали владели работами" },
      ],
      cta1: "Написать",
      cta2: "Смотреть работы",
    },
    contact: {
      title: "Давайте\nпоговорим",
      subtitle: "/ Свяжитесь с обезьяной",
      location: "Где-то в джунглях",
      socials: ["Instagram", "Twitter", "TikTok", "Behance"],
      form: {
        name: "Имя",
        namePlaceholder: "Ваше имя",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Сообщение",
        messagePlaceholder: "Скажите обезьяне что-нибудь...",
        submit: "Отправить",
        submitting: "Отправка...",
        success: "Сообщение отправлено! 🐒",
      },
    },
  },
}