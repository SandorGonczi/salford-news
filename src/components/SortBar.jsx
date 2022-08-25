const SortBar = ({ order, setOrder, sortBy, setSortBy, setSearchParams }) => {
  return (
    <section>
      <p>Sort by: </p>
      <select
        value={sortBy}
        onChange={(event) => {
          setSortBy(event.target.value);
          setSearchParams({ sortby: sortBy, order: order });
        }}
      >
        <option value="created_at">time</option>
        <option value="votes">votes</option>
        <option value="comment_count">comments</option>
      </select>
      <select
        value={order}
        onChange={(event) => {
          setOrder(event.target.value);
          setSearchParams({ sortby: sortBy, order: order });
        }}
      >
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </section>
  );
};
export default SortBar;
