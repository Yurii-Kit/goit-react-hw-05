import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputValue = formData.get('name').trim();
    if (inputValue === '') {
      alert('Please enter a search query');
      return;
    }
    onSearch(inputValue);
    event.currentTarget.reset();
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.searchFormInput}
        name="name"
        type="text"
        placeholder="Search movies..."
      />
      <button className={css.formBtn} type="submit">
        Search
      </button>
    </form>
  );
}
