export default {
  getWatchs() {
    const watchList = [
      {
        id: "watch-1",
        video: "https://player.vimeo.com/external/449623829.hd.mp4?s=82893a1e42c7c1b177128a86a6253b7c4d1f071f&profile_id=174",
        text: "في الفيديو ده بشرح إزاي تبدأ تتعلم برمجة من الصفر، من غير ما يكون عندك أي خلفية. لو مهتم، تابع للنهاية.",
        createdAt: new Date("2025-04-28T10:00:00Z"),
        user: {
          name: "Ahmed Tarek",
          avatar: "https://via.placeholder.com/100?text=AT",
          id: "user-1"
        },
        reactionIcons: ["Like", "Love", "Haha"],
        reactionUser: {
          isReaction: true,
          type: "Like",
          text: "أعجبني"
        },
        reactions: {
          types: ["Like", "Love", "Haha"],
          isReaction: true,
          total: 320,
          userReaction: {
            type: "Like",
            text: "أعجبني"
          }
        },
        comments: {
          total: 18
        }
      },
      {
        id: "watch-2",
        video: "https://player.vimeo.com/external/449623829.hd.mp4?s=82893a1e42c7c1b177128a86a6253b7c4d1f071f&profile_id=174",
        text: "ضحكتك مهمة! اتفرج على الفيديو ده وهتضحك من قلبك 😂 متنساش تشارك الضحكة مع صحابك.",
        createdAt: new Date("2025-04-29T14:30:00Z"),
        user: {
          name: "Salma Adel",
          avatar: "https://via.placeholder.com/100?text=SA",
          id: "user-2"
        },
        reactionIcons: ["Like", "Love", "Haha"],
        reactionUser: {
          isReaction: false,
          type: "Love",
          text: "أحببته"
        },
        reactions: {
          types: ["Like", "Love", "Haha"],
          isReaction: false,
          total: 210,
          userReaction: {
            type: "Love",
            text: "أحببته"
          }
        },
        comments: {
          total: 33
        }
      }
      // ممكن تضيف لحد 30 بنفس الشكل
    ];

    return watchList;
  },

  getWatchById(watchId) {
    const post = this.getWatchs().find((e) => e.id === watchId);
    return {
      ...post,
      list: [
        {
          user: {
            name: "Youssef Gamal",
            avatar: "https://via.placeholder.com/80?text=YG",
            id: "user-3"
          },
          message: "شرحك بسيط وواضح جدًا، استمر يا نجم!"
        },
        {
          user: {
            name: "Mariam Hossam",
            avatar: "https://via.placeholder.com/80?text=MH",
            id: "user-4"
          },
          message: "الفيديو فادني جدًا، شكراً ليك 🌟"
        }
      ]
    };
  }
};
