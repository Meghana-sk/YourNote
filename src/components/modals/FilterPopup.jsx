import { useFilter } from "../../context";
import {
  CLEAR_FILTERS,
  SORT_BY_PRIORITY,
  SORT_BY_DATE,
  LOW_TO_HIGH_PRIORITY,
  HIGH_TO_LOW_PRIORITY,
  NEWEST_FIRST,
  OLDEST_FIRST,
} from "../../shared/variables";
import "./filterpopup.css";

const FilterPopup = ({ setOpenFilter }) => {
  const {
    filterState: { sortByPriority, sortByDate },
    filterDispatch,
  } = useFilter();
  const clearFilterHandler = () => {
    filterDispatch({ type: CLEAR_FILTERS });
  };
  return (
    <div className="filter-wrapper">
      <article className="filter-container">
        <header className="filter-header">
          <h1>Filters</h1>
          <i
            className="fas fa-times cursor-pointer"
            onClick={() => setOpenFilter(false)}
          ></i>
        </header>
        <section className="filter-body">
          <div className="filter-category">
            <h3>By Priority</h3>
            <div className="radiobtn">
              <input
                type="radio"
                name="priority"
                id="lowToHigh"
                checked={sortByPriority === LOW_TO_HIGH_PRIORITY}
                onChange={() =>
                  filterDispatch({
                    type: SORT_BY_PRIORITY,
                    payload: LOW_TO_HIGH_PRIORITY,
                  })
                }
              />
              <label htmlFor="lowToHigh"> Low to high</label>
            </div>
            <div className="radiobtn">
              <input
                type="radio"
                name="priority"
                id="hightolow"
                checked={sortByPriority === HIGH_TO_LOW_PRIORITY}
                onChange={() =>
                  filterDispatch({
                    type: SORT_BY_PRIORITY,
                    payload: HIGH_TO_LOW_PRIORITY,
                  })
                }
              />
              <label htmlFor="hightolow"> High to low</label>
            </div>
          </div>
          <div className="filter-category">
            <h3>By Date</h3>
            <div className="radiobtn">
              <input
                type="radio"
                name="date"
                id="newestNote"
                checked={sortByDate === NEWEST_FIRST}
                onChange={() =>
                  filterDispatch({
                    type: SORT_BY_DATE,
                    payload: NEWEST_FIRST,
                  })
                }
              />
              <label htmlFor="newestNote"> Newest first</label>
            </div>
            <div className="radiobtn">
              <input
                type="radio"
                name="date"
                id="oldestNote"
                checked={sortByDate === OLDEST_FIRST}
                onChange={() =>
                  filterDispatch({
                    type: SORT_BY_DATE,
                    payload: OLDEST_FIRST,
                  })
                }
              />
              <label htmlFor="oldestNote"> Oldest first</label>
            </div>
          </div>
        </section>
        <footer className="filter-footer">
          <button className="btn btn-secondary" onClick={clearFilterHandler}>
            Clear filters
          </button>
        </footer>
      </article>
    </div>
  );
};

export { FilterPopup };
