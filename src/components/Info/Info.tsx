import Input from "antd/es/input/Input";

import { Button, Tooltip, Upload } from "antd";

import "./styles.scss";
import { useStoreDispatch, useStoreSelector } from "../../hooks/redux";
import { ChangeEvent } from "react";
import {
  changeName,
  getDamage,
  uploadCharacter,
} from "../../store/actionCreators";

const icons = new Map();

icons.set(
  3,
  <svg
    fill="#000000"
    width="30px"
    height="30px"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M29.125 10.375h-7.5v-7.5c0-1.036-0.839-1.875-1.875-1.875h-7.5c-1.036 0-1.875 0.84-1.875 1.875v7.5h-7.5c-1.036 0-1.875 0.84-1.875 1.875v7.5c0 1.036 0.84 1.875 1.875 1.875h7.5v7.5c0 1.036 0.84 1.875 1.875 1.875h7.5c1.036 0 1.875-0.84 1.875-1.875v-7.5h7.5c1.035 0 1.875-0.839 1.875-1.875v-7.5c0-1.036-0.84-1.875-1.875-1.875z"></path>
  </svg>
);

icons.set(
  2,
  <svg
    fill="#000000"
    width="30px"
    height="30x"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M25.003906 2.9941406 A 1.0001 1.0001 0 0 0 24.552734 3.1054688L14.763672 8L4 8 A 1.0001 1.0001 0 1 0 4 10L4.0839844 10L12 11L12 16.634766L12 20.992188L12 26 A 1.0001 1.0001 0 1 0 14 26L14.591797 19.505859C14.617797 19.219859 14.702797 18.942406 14.841797 18.691406L16.011719 16.572266C16.352719 15.954266 16.9835 15.552906 17.6875 15.503906L24.933594 15L25 15 A 1.0001 1.0001 0 1 0 25 13L17 13L17 10.957031L25.535156 4.8457031 A 1.0001 1.0001 0 0 0 25.003906 2.9941406 z M 18.5 17 A 2.5 2.5 0 0 0 16 19.5 A 2.5 2.5 0 0 0 18.5 22 A 2.5 2.5 0 0 0 21 19.5 A 2.5 2.5 0 0 0 18.5 17 z" />
  </svg>
);

icons.set(
  1,
  <svg
    fill="#000000"
    width="30px"
    height="30px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13,9h6L8,22l3-10H5L10,2h7Z" />
  </svg>
);

const Info: React.FC = () => {
  const store = useStoreSelector((state) => state);
  const dispatch = useStoreDispatch();

  const downloadCharacter = async () => {
    const jsonStore = JSON.stringify(store);
    const link = document.createElement("a");
    link.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(jsonStore)
    );
    link.setAttribute("download", "character.json");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="info">
      <div className="info__inner">
        <div className="info__nameWrapper">
          <Input
            value={store.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const element = e.target as HTMLInputElement;
              dispatch(changeName(element.value));
            }}
            className="info__input"
            autoFocus
          />
        </div>
        <ul className="info__list">
          {store.info.map((el) => {
            return (
              <Tooltip title={el.name} key={el.name}>
                <li className="info__item">
                  {icons.get(el.id)}
                  <span>{el.value}</span>
                </li>
              </Tooltip>
            );
          })}
        </ul>
        <Button
          style={{ marginLeft: 20 }}
          danger
          type="primary"
          className="info__btn"
          onClick={() => {
            dispatch(getDamage());
          }}
        >
          Получить урон
        </Button>
        <Button className="info__btn" onClick={downloadCharacter}>
          Выгрузить перса
        </Button>
        <Upload
          accept=".json"
          beforeUpload={(file) => {
            const reader = new FileReader();

            reader.onload = (e) => {
              if (e.target) {
                dispatch(
                  uploadCharacter(JSON.parse(e.target.result as string))
                );
              }
            };
            reader.readAsText(file);

            // Prevent upload
            return false;
          }}
          showUploadList={false}
        >
          <Button className="info__btn" type="primary">
            Загрузить перса
          </Button>
        </Upload>
      </div>
    </div>
  );
};

export default Info;
