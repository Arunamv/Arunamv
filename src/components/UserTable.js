import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Grid, makeStyles } from "@material-ui/core";
import db from "../Firebase";

const data = [
  { name: "Geeksforgeeks", students: 400 },
  { name: "Technical scripter", students: 700 },
  { name: "Geek-i-knack", students: 200 },
  { name: "Geek-o-mania", students: 1000 },
];

const columns = [
  {
    field: "UserName",
    headerName: "User Name",
    headerClassName: "header-name",
    width: 150,
  },
  {
    field: "EmailId",
    headerName: "Email Id",
    headerClassName: "header-name",
    width: 150,
  },
  {
    field: "Password",
    headerName: "Password",
    headerClassName: "header-name",
    width: 140,
  },
  {
    field: "Entity",
    headerName: "Entity",
    headerClassName: "header-name",
    width: 170,
  },
  {
    field: "Role",
    headerName: "Role",
    headerClassName: "header-name",
    width: 120,
  },
];

const useStyles = makeStyles({
  root: {
    "& .header-name": {
      backgroundColor: "darkgrey",
      fontSize:18,
      fontFamily: 'Poppins Regular',
      fontStyle:'bold',
    },
  },
});

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function UserTable() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  }, []);
  const COLORS = ["#3DCC91", "#FFB366", "#FF7373", "#FFCC00", "#3B22FF"];
  const classes = useStyles();
  return (
    <div style={{ height: 400, width: "300%", marginLeft: "150px" }}>
      <Grid container spacing={2}>
        <Grid item xs={7} className={classes.root}>
          <DataGrid width={100} rows={info} columns={columns} pageSize={5} />
        </Grid>
        <Grid item xs={5}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              dataKey="students"
              outerRadius={150}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Grid>
      </Grid>
    </div>
  );
}