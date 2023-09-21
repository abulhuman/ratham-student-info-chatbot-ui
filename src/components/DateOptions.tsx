import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { setDate, setTime } from '../app/userSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DateOptions(props: any) {
  const dispatch = useAppDispatch();
  const [showTime, setShowTime] = useState(false);
  const [showDate, setShowDate] = useState(true);

  function getWeekDates() {
    const startDate = new Date(); // Get the current date
    const weekDates = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(
        startDate.getTime() + i * 24 * 60 * 60 * 1000
      );
      const date =
        currentDate.toDateString().split(' ')[2] +
        ' ' +
        currentDate.toDateString().split(' ')[1].toLocaleUpperCase('en-US');
      const dayName = currentDate
        .toLocaleDateString('en-US', {
          weekday: 'short'
        })
        .toLocaleUpperCase('en-US');

      weekDates.push({ date, dayName });
    }

    return weekDates;
  }

  // Usage:
  const dates = getWeekDates();
  const { slotDate } = useSelector(
    (state: RootState) => state.user
  );

  const handleOnClick = (time: string) => {
    time = `${time.split(' ')[0]}:00 ${time.split(' ')[1]}`;
    dispatch(setTime(time));
   
    setShowTime(false);
    setShowDate(false);
    props.actionProvider.handlePickSlot({date: slotDate, time});
  };

  return (
    <>
      {showDate && (
        <div className='flex overflow-x-auto py-3 shadow-sm'>
          {dates.map((date) => (
            
            <button
              key={date.dayName}
              className='shadow-md py-2 px-0 flex flex-col basis-1/7 justify-center items-center rounded-sm ml-3'
              onClick={() => {
                setShowTime(true);
                dispatch(setDate(`${date.date}, ${date.dayName}`));
              }}
            >
              <div className='w-20'>{date.date}</div>
              <div>{date.dayName}</div>
            </button>
          ))}
        </div>
      )}
      {showTime && (
        <>
          <div className="py-2 pl-2 pr-4 mt-4 justify-center items-center" >
            <div className='text-lg'>Morning</div>
            <div className='flex mb-3'>
              {[9, 10, 11, 12].map((hr) => (
                <button
                  key={hr}
                  className='shadow-md p-2 ml-3 text-md rounded-lg'
                  onClick={() => handleOnClick(`${hr} AM`)}
                >
                  {hr}&nbsp;AM
                </button>
              ))}
            </div>
            <div className='text-lg'>Afternoon </div>
            <div className='flex mb-3'>
              {[2, 3, 4, 5].map((hr) => (
                <button
                  key={hr}
                  className='shadow-md p-2 ml-3 text-md rounded-lg'
                  onClick={() => handleOnClick(`${hr} PM`)}
                >
                  {hr}&nbsp;PM
                </button>
              ))}
            </div>
            <div className='text-lg'>Evening</div>
            <div className='flex mb-3'>
              {[7, 8, 9, 10].map((hr) => (
                <button
                  key={hr}
                  className='shadow-md p-2 ml-3 text-md rounded-lg'
                  onClick={() => handleOnClick(`${hr} PM`)}
                >
                  {hr}&nbsp;PM
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

