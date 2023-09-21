import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const ThankYou = () => {
  const { name, age } = useSelector((state: RootState) => state.user);
  return (
    <div className="p-3 mt-6">
      <p className='rounded-md p-2 bg-zinc-200'>
        Your name <strong>{name}</strong> aged <strong><em>{age}</em></strong> has been added to student system. You may
        now exit.
      </p>
    </div>
  );
};

export default ThankYou;

