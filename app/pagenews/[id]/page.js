import FullPost from "@/app/components/fullPost.js/FullPost";

export const metadata = {
    title: "Post",
    description: "Post",
  };

export function PagePost({params: id}) {
console.log(id)
    return (
        <FullPost parametrs={id}/>
    )
}

export default PagePost