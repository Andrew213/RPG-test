import { Button, Table } from "antd";
import { ColumnType, ColumnGroupType } from "antd/es/table";
import { useStoreDispatch, useStoreSelector } from "../../hooks/redux";
import { lvlUPSkill } from "../../store/actionCreators";

const Skills: React.FC = () => {
  const store = useStoreSelector((state) => state);
  const dispatch = useStoreDispatch();
  const columns: (ColumnGroupType<any> | ColumnType<any>)[] = [
    {
      title: "Набор умений",
      children: [
        {
          title: "Название",
          dataIndex: "name",
          key: "name",
          align: "center",
          width: 300,
        },
        {
          title: "Уровень",
          dataIndex: "value",
          align: "center",
          key: "value",
          width: 300,
          render: (value) => {
            switch (value) {
              case 0:
                return "Нетренированный";
              case 1:
                return "Новичек";
              case 2:
                return "Ученик";
              case 3:
                return "Адепт";
              case 4:
                return "Эксперт";
              default:
                return "Мастер";
            }
          },
        },
        {
          title: "Прокачка",
          align: "center",
          width: 300,
          render: (_value, record) => {
            return (
              <Button
                disabled={record.maxLvL}
                onClick={() => dispatch(lvlUPSkill(record))}
              >
                Прокачать 1 уровень
              </Button>
            );
          },
        },
      ],
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={store.skills}
      pagination={false}
      rowKey="id"
      size="small"
    />
  );
};

export default Skills;
