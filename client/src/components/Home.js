import { useEffect, useState } from 'react';
import ReactFlowComponent from './ReactFlowComponent';
import { ReactFlowProvider } from 'react-flow-renderer';
import { useAuth } from '../contexts/AuthContext';
import { rtd } from '../firebase/firebase';
import BrowserInteractionTime from 'browser-interaction-time';

// import components
import SideBar from './SideBar';
import Header from './Header';
import Result from './Result';

import '../styles/global.scss';

// initialize timer
const browserInteractionTime = new BrowserInteractionTime({
  timeIntervalEllapsedCallbacks: [],
  absoluteTimeEllapsedCallbacks: [],
  browserTabInactiveCallbacks: [],
  browserTabActiveCallbacks: [],
  idleTimeoutMs: 1800000, // if user inactive for 30 minutes stop the count
  checkCallbacksIntervalMs: 250,
});

const today = new Date().toJSON().slice(0, 10);

export default function App() {
  const { currentUser } = useAuth();
  const ref = rtd.ref('users').child(currentUser.uid);
  const [todayData, setTodaydata] = useState(0);

  useEffect(async () => {
    // Get today's value if user
    // interacted with the platform today
    await ref
      .child(today)
      .child('cnn-platform')
      .once('value', async (snapshot) => {
        if (snapshot.exists()) {
          const value = await snapshot.val();
          setTodaydata(value);
        }
      });
  }, []);

  useEffect(() => {
    browserInteractionTime.startTimer();

    // every 5 seconds callback function
    // would save current time spent in the page
    // to real time database
    const interval = setInterval(() => {
      const timeInSeconds =
        browserInteractionTime.getTimeInMilliseconds() / 1000;

      // Add time spent today to the current count
      const trimTime = parseInt(timeInSeconds) + todayData;

      ref.child(today).update({
        'cnn-platform': trimTime,
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      browserInteractionTime.reset();
    };
  }, [todayData]);

  return (
    <div className="container">
      <ReactFlowProvider>
        <SideBar />
        <div className="content">
          <Header />
          <div className="flow">
            <ReactFlowComponent />
          </div>
          <Result />
        </div>
      </ReactFlowProvider>
    </div>
  );
}
