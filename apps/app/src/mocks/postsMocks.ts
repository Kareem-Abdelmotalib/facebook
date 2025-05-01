export default {
  getPosts() {
    const posts = [
      {
        id: "post-1",
        image: "https://via.placeholder.com/300x200?text=Post+1",
        text: "محدش جرب كشري التحرير بعد الساعة 8؟ حاسس الطعم بيختلف عن الصبح 🤔",
        createdAt: "2025-04-30",
        user: {
          name: "أحمد طارق",
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
          total: 124,
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
        id: "post-2",
        image: "https://via.placeholder.com/300x200?text=Post+2",
        text: "البحر في إسكندرية النهاردة وهمي! الهوا، المنظر، وكل حاجة كانت تفتح النفس 🌊",
        createdAt: "2025-04-29",
        user: {
          name: "مريم حسام",
          avatar: "https://via.placeholder.com/100?text=MH",
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
          total: 92,
          userReaction: {
            type: "Love",
            text: "أحببته"
          }
        },
        comments: {
          total: 10
        }
      }
    ];

    return posts;
  },

  getPostById(postId) {
    const post = this.getPosts().find((e) => e.id === postId);
    return {
      ...post,
      list: [
        {
          user: {
            name: "يوسف جمال",
            avatar: "https://via.placeholder.com/80?text=YG",
            id: "user-3"
          },
          message: "أنا كنت هناك امبارح برضو! الجو كان تحفة فعلاً 🔥"
        },
        {
          user: {
            name: "سلمى عادل",
            avatar: "https://via.placeholder.com/80?text=SA",
            id: "user-4"
          },
          message: "الصورة تحفة بجد 😍، حاسة إني محتاجة خروجة ضروري"
        }
      ]
    };
  }
};
