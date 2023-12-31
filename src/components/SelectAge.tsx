import { useAppDispatch } from "../app/hooks";
import { setAge } from "../app/userSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SelectAge = (props: any) => {
  const dispatch = useAppDispatch();
  const ages = [];
  for (let i = 18; i <= 40; i++) {
    ages.push(i);
  }

  return (
    <div className="w-full flex ml-8">
      <div className="relative w-56">
        <select
          id="id-01"
          name="id-01"
          onChange={(event) => {
            const age = event.target.value;
            dispatch(setAge(age));
            props.actionProvider.handleLast(age);
          }}
          className="relative w-full h-10 px-4 text-sm rounded-md transition-all bg-white border outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-emerald-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400">
          <option value="" disabled>
            Select age
          </option>
          {ages.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-labelledby="title-01 description-01"
          role="graphics-symbol">
          <title id="title-01">Arrow Icon</title>
          <desc id="description-01">Arrow icon of the select list.</desc>
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectAge;
