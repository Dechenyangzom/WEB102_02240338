const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create 10 users
  const users = [];
  for (let i = 1; i <= 10; i++) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);
    const user = await prisma.user.create({
      data: {
        username: `user${i}`,
        email: `user${i}@example.com`,
        password: hashedPassword,
        name: `User ${i}`,
        bio: `Bio for user ${i}`
      }
    });
    users.push(user);
    console.log(`Created user: ${user.username}`);
  }

  // Create 5 videos per user (50 total)
  const videos = [];
  for (const user of users) {
    for (let j = 1; j <= 5; j++) {
      const video = await prisma.video.create({
        data: {
          title: `Video ${j} by ${user.username}`,
          description: `This is video ${j} by ${user.username}`,
          videoUrl: `https://example.com/videos/${user.id}-${j}.mp4`,
          thumbnail: `https://example.com/thumbnails/${user.id}-${j}.jpg`,
          userId: user.id
        }
      });
      videos.push(video);
    }
  }
  console.log(`Created ${videos.length} videos`);

  // Create 200 comments (distributed across videos)
  for (let i = 0; i < 200; i++) {
    const user = users[i % users.length];
    const video = videos[i % videos.length];
    await prisma.comment.create({
      data: {
        content: `Comment ${i + 1} on video ${video.id}`,
        userId: user.id,
        videoId: video.id
      }
    });
  }
  console.log('Created 200 comments');

  // Create 300 video likes
  const videoLikePairs = new Set();
  let videoLikesCreated = 0;
  while (videoLikesCreated < 300) {
    const user = users[Math.floor(Math.random() * users.length)];
    const video = videos[Math.floor(Math.random() * videos.length)];
    const key = `${user.id}-${video.id}`;
    if (!videoLikePairs.has(key)) {
      videoLikePairs.add(key);
      await prisma.videoLike.create({ data: { userId: user.id, videoId: video.id } });
      videoLikesCreated++;
    }
  }
  console.log('Created 300 video likes');

  // Create 40 follow relationships
  const followPairs = new Set();
  let followsCreated = 0;
  while (followsCreated < 40) {
    const follower = users[Math.floor(Math.random() * users.length)];
    const following = users[Math.floor(Math.random() * users.length)];
    const key = `${follower.id}-${following.id}`;
    if (follower.id !== following.id && !followPairs.has(key)) {
      followPairs.add(key);
      await prisma.follow.create({ data: { followerId: follower.id, followingId: following.id } });
      followsCreated++;
    }
  }
  console.log('Created 40 follow relationships');

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });