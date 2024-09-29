const Page = () => {
  return (
    <div>Page</div>
  )
}

export default Page

// Here as this page component is inside private folder "_lib" makes this component un-routable.

// But let say we want to have "_" underscore as name of route so instead of _ we can prefix the folder name with "%5F" as folder name, ex "/%5Flib"