const users = [
  {
    id: "1",
    username: "traveler",
    email: "traveler@example.com",
    full_name: "Karma",
    profile_picture: "https://example.com/profiles/traveler.jpg",
    bio: "Travel photographer",
    created_at: "2023-01-15"
  },
  {
    id: "2",
    username: "foodie",
    email: "foodie@example.com",
    full_name: "Tenzin",
    profile_picture: "https://example.com/profiles/foodie.jpg",
    bio: "Food lover and chef",
    created_at: "2023-02-20"
  },
  {
    id: "3",
    username: "adventurer",
    email: "adventurer@example.com",
    full_name: "Pema",
    profile_picture: "https://example.com/profiles/adventurer.jpg",
    bio: "Hiking and outdoors",
    created_at: "2023-03-10"
  }
];

const posts = [
  {
    id: "1",
    caption: "Beautiful sunset at the mountains!",
    image: "https://example.com/posts/sunset.jpg",
    user_id: "1",
    likes_count: 42,
    comments_count: 5,
    created_at: "2023-03-01"
  },
  {
    id: "2",
    caption: "Trying out this amazing new recipe!",
    image: "https://example.com/posts/food.jpg",
    user_id: "2",
    likes_count: 87,
    comments_count: 12,
    created_at: "2023-03-05"
  },
  {
    id: "3",
    caption: "Summit reached! What a view!",
    image: "https://example.com/posts/summit.jpg",
    user_id: "3",
    likes_count: 134,
    comments_count: 23,
    created_at: "2023-03-10"
  }
];

const comments = [
  {
    id: "1",
    text: "Amazing shot!",
    user_id: "2",
    post_id: "1",
    created_at: "2023-03-02"
  },
  {
    id: "2",
    text: "Where is this place?",
    user_id: "3",
    post_id: "1",
    created_at: "2023-03-03"
  },
  {
    id: "3",
    text: "Looks delicious!",
    user_id: "1",
    post_id: "2",
    created_at: "2023-03-06"
  }
];

const likes = [
  { id: "1", user_id: "2", post_id: "1", created_at: "2023-03-02" },
  { id: "2", user_id: "3", post_id: "1", created_at: "2023-03-03" },
  { id: "3", user_id: "1", post_id: "2", created_at: "2023-03-06" }
];

const followers = [
  { id: "1", follower_id: "2", following_id: "1", created_at: "2023-02-01" },
  { id: "2", follower_id: "3", following_id: "1", created_at: "2023-02-15" },
  { id: "3", follower_id: "1", following_id: "2", created_at: "2023-02-20" }
];

module.exports = { users, posts, comments, likes, followers };