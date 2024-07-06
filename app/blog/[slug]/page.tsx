type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return<> <h1>Slug: {params.slug}<p>My Project</p><p>Welcome</p></h1>;</>
}
