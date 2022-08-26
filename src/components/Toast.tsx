import { useEffect, useState } from "react";
import { ToastType } from "../data/ToastItem";
import { removeToast } from "../features/toastList/toastListSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import "../style/Components/Toast.css";


export function Toast() {
  const toastList = useAppSelector((state) => state.toastList.toastList);
  const dispatch = useAppDispatch();

  const [list, setList] = useState(toastList);
  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, 2500);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line
  }, [toastList, list]);

  const deleteToast = (id: number) => {
    dispatch(removeToast(id));
  };

  return (
    <div className={`notification-container bottom-right`}>
      {list.map(
        (
          toast: { message: string; id: number; toastType: ToastType },
          i: number
        ) => (
          <div
            key={i}
            className={`notification toast bottom-right ${toast.toastType}`}
          >
            <div>
              <p className="notification-message">{toast.message}</p>
            </div>
            <button onClick={() => deleteToast(toast.id)} aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
        )
      )}
    </div>
  );
}
