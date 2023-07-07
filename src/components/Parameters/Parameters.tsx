import { Button, Table } from "antd";
import "./styles.scss";
import { ColumnType, ColumnGroupType } from "antd/es/table";
import { useStoreDispatch, useStoreSelector } from "../../hooks/redux";
import { downParameter, upParameter } from "../../store/actionCreators";

const Parameters: React.FC = ({ ...rest }) => {
  const store = useStoreSelector((state) => state);
  const dispatch = useStoreDispatch();

  const columns: (ColumnGroupType<any> | ColumnType<any>)[] = [
    {
      title: "Базовые параметры",
      children: [
        {
          title: "Название",
          dataIndex: "name",
          key: "name",
          align: "center",
        },
        {
          title: "Значение",
          dataIndex: "value",
          align: "center",
          key: "value",
          render: (value, record) => {
            return (
              <>
                <Button
                  onClick={() => dispatch(downParameter(record))}
                  type="link"
                >
                  -
                </Button>
                {value}
                <Button
                  onClick={() => dispatch(upParameter(record))}
                  type="link"
                >
                  +
                </Button>
              </>
            );
          },
        },
      ],
    },
  ];

  return (
    <Table
      dataSource={store.parameters}
      pagination={false}
      className="skillsTable"
      columns={columns}
      rowKey="id"
      size="small"
      {...rest}
    />
  );
};

export default Parameters;
