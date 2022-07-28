const url = process.env.URL ?? "https://eatitmarilyn.com";
const title = "Eat It Marilyn";

module.exports = {
    en: {
        url,
        title,
        description: "TODO",
        feed: {
            subtitle: "TODO",
            filename: "feed.xml",
            path: "/feed/en.feed.xml",
            id: "TODO",
        },
        jsonfeed: {
            path: "/feed/en.feed.json",
            url: `${url}/feed/en.feed.json`,
        },
        discord: {
            label: 'discord',
            link: 'https://discord.gg/2UCkWYan'
        },
        author: {
            url,
            name: "EatItMarilyn",
            email: "nick@nickthenoob.com",
        },
        posts: {
            title: `Posts | ${title}`,
            description: "Blog posts list",
        },
        about: {
            title: `About | ${title}`,
        },
    },
};
