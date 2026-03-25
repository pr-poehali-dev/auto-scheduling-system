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
          title: "Jungle Symphony",
          category: "Abstract / Acrylic on canvas",
          year: "2024",
          description:
            "A wild explosion of tropical colors. This piece captures the raw chaos of the jungle — every brushstroke feels alive, breathing, growing. Green meets orange in a dance that only a monkey could choreograph.",
        },
        {
          number: "02",
          title: "Banana Dreams",
          category: "Mixed media / Expressionism",
          year: "2024",
          description:
            "What does a monkey dream of? Yellow gold and purple swirls, infinite warmth, the smell of ripe fruit in the air. This painting is a portal into pure happiness — unfiltered and unashamed.",
        },
        {
          number: "03",
          title: "Wild Strokes",
          category: "Oil painting / Chaos series",
          year: "2023",
          description:
            "Part of the legendary Chaos Series. Bold red, stark black, and raw white collide in a painting that asks no questions and gives no answers. The brush moved faster than thought — and that's exactly the point.",
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
      title: "Meet\nthe artist\nbehind",
      p1: "Chempszze is a monkey with a paintbrush and zero interest in following the rules. Born in the jungle, trained by chaos, inspired by bananas.",
      p2: "Every painting is a window into a wild mind — unfiltered, honest, and surprisingly beautiful. Art school? Never heard of it. But the canvases don't lie.",
      p3: "The name Chempszze came from a jungle breeze and a half-eaten mango. The art came from somewhere deeper — a place where instinct and color collide.",
      stats: [
        { value: "∞", label: "Paintings", sublabel: "Each one weirder than the last" },
        { value: "1", label: "Monkey", sublabel: "Fully dedicated to the craft" },
        { value: "0", label: "Rules", sublabel: "Who needs them anyway?" },
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
          title: "Симфония джунглей",
          category: "Абстракция / Акрил на холсте",
          year: "2024",
          description:
            "Дикий взрыв тропических красок. Эта работа передаёт сырой хаос джунглей — каждый мазок кисти живёт, дышит, растёт. Зелёный встречает оранжевый в танце, который мог поставить только обезьяна.",
        },
        {
          number: "02",
          title: "Банановые мечты",
          category: "Смешанная техника / Экспрессионизм",
          year: "2024",
          description:
            "О чём мечтает обезьяна? О золоте жёлтого и фиолетовых вихрях, о бесконечном тепле, о запахе спелых фруктов. Эта картина — портал в чистое счастье, без фильтров и без стыда.",
        },
        {
          number: "03",
          title: "Дикие мазки",
          category: "Масло / Серия «Хаос»",
          year: "2023",
          description:
            "Часть легендарной серии «Хаос». Смелый красный, резкий чёрный и сырой белый сталкиваются в картине, которая не задаёт вопросов и не даёт ответов. Кисть двигалась быстрее мысли — и это и есть смысл.",
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
      title: "Знакомьтесь:\nхудожник\nза холстом",
      p1: "Чемпшзз — обезьяна с кистью и полным равнодушием к правилам. Рождён в джунглях, воспитан хаосом, вдохновлён бананами.",
      p2: "Каждая картина — окно в дикий разум: неотфильтрованный, честный и удивительно красивый. Школа искусств? Не слышал. Но холсты не лгут.",
      p3: "Имя Чемпшзз пришло с порывом джунглевого ветра и наполовину съеденным манго. Искусство — из места глубже, там где инстинкт встречает цвет.",
      stats: [
        { value: "∞", label: "Картин", sublabel: "Каждая страннее предыдущей" },
        { value: "1", label: "Обезьяна", sublabel: "Полностью посвящена искусству" },
        { value: "0", label: "Правил", sublabel: "Кому они вообще нужны?" },
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
