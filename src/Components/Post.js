import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

function Post() {
  const posts = [
    {
      id: 1,
      Avatar: "Srija",
      title: "Post 1",
      image:
        "https://images.unsplash.com/photo-1702076544677-3c7945cb8e4c?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      body: "As snowflakes weave a silent carol, Christmas unfolds, a season of twinkling lights and warm embraces, where the spirit of giving illuminates every heart with joy and goodwill..",
    },
    {
      id: 2,
      Avatar: "Avinash",
      title: "Post 2",
      image:
        "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      body: "Savor the succulence of perfectly seasoned and grilled chicken, a culinary symphony that dances on your taste buds..",
    },
    {
      id: 3,
      Avatar: "Srija",
      title: "Post 3",
      image:
        "https://images.unsplash.com/photo-1701664368345-e3bec90acd53?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      body: "Step into a clean white oasis where creativity flourishes, as every pristine surface invites inspiration and focus in your minimalist workspace..",
    },
    {
      id: 4,
      Avatar: "Avinash",
      title: "Post 4",
      image:
        "https://images.unsplash.com/photo-1701839640130-c294f367ffa5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      body: "In the cradle of innocence, a beautiful baby beams with the purest joy, a tiny masterpiece painting the world with the hues of wonder and boundless love..",
    },
    {
      id: 5,
      Avatar: "Srija",
      title: "Post 5",
      image:
        "https://images.unsplash.com/photo-1701725313832-d8f7fadb3006?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      body: "Amidst the hush of winter, trees wear a magical coat of snow, transforming the landscape into an enchanting forest, where each branch tells a silent tale of nature's frosty embrace..",
    },
    {
      id: 6,
      Avatar: "Avinash",
      title: "Post 6",
      image:
        "https://images.unsplash.com/photo-1701674397460-82694a5da42b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      body: "As the clock strikes midnight, 2024 unveils a blank canvas of possibilities, beckoning us to write a year filled with dreams realized, challenges conquered, and joy celebrated..",
    },
    {
      id: 7,
      Avatar: "Srija",
      title: "Post 7",
      image:
        "https://images.unsplash.com/photo-1701762292610-3323efd62273?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      body: "In the heartbeat of Tokyo's bustling streets, neon lights paint a vivid tapestry, blending modern flair with timeless tradition, inviting all to wander through a city that never sleeps..",
    },
    {
      id: 8,
      Avatar: "Avinash",
      title: "Post 8",
      image:
        "https://images.unsplash.com/photo-1682687982107-14492010e05e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      body: "Embrace the unexpected thrill as you dive into the secret oasis, swimming amidst nature's lush embrace.",
    },
    // Add more posts as needed
  ];

  return (
    <>
      {posts.map((post) => (
        <Card key={post.id} sx={{ margin: 5 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                {post.Avatar}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={post.title}
            subheader={new Date().toLocaleString() + ""}
          />
          <CardMedia
            component="img"
            height="600vh"
            style={{ objectFit: "contain" }}
            image={post.image}
            alt="Picture"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default Post;
