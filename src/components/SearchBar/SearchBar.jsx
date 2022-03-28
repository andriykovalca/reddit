const SearchBar = (props) => (
    <form action="/" method="get">
        <input
            type="text"
            id="user-search"
            placeholder="enter user name"
            name="s"
            onSubmit={props.onSubmit}
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;