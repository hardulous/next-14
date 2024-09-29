const Docs = ({ params }: { params: { slug: string[] } }) => {
  return (
    <div>
      <h1>Doc Home Page</h1>
      {params.slug?.toString()}
    </div>
  );
};

export default Docs;

// Here this page component will match any url that contains "/docs" segment in the path.

// Here the slug is an array of subsequent route segment after "/docs", but not handle case for "/docs" only, To handle case of it also use option catch all route by having another [ [...slug] ] another square bracket. 