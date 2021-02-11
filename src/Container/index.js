import React from "react";
import style from "../../styles/content.module.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Card from "../components/Card";
import Grid from "@material-ui/core/Grid";

import { getProfile } from "../store/actions";

const Container = () => {
  const [loading, setLoading] = React.useState(true);
  const { profile } = useSelector((state) => state);
  const dispatch = useDispatch();

  const getProfiles = async () => {
    const userProfiles = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(getProfile(userProfiles.data));
    console.log(userProfiles.data);
  };

  // const loader = () => {
  //   setLoading("loading...");
  // };

  React.useEffect(() => {
    getProfiles();
  }, []);

  return (
    <section className={style.root}>
      <Grid container spacing={4}>
        {loading
          ? profile.map((users) => {
              return (
                <Grid item xs={12} sm={6} key={users.id}>
                  <Card>
                    <div className={style.avatar}>
                      <img
                        src={`https://avatars.dicebear.com/v2/avataaars/{{${users.name}}}.svg?options[mood][]=happy`}
                      />
                    </div>
                    <div className={style.details}>
                      <h2 className={`text-center`}>{users.name}</h2>
                      <p>Email address: {users.email}</p>
                      <p>Telephone: {users.phone}</p>
                      <p>
                        Address:{" "}
                        {`${users.address.street} ${users.address.suite} ${users.address.city}`}
                      </p>
                      <p>
                        {" "}
                        Website:
                        <a href={`https://${users.website}`}>
                          {" "}
                          {users.website}
                        </a>
                      </p>
                      <p>Company: {users.company.name}</p>
                    </div>
                  </Card>
                </Grid>
              );
            })
          : "loading..."}
      </Grid>
    </section>
  );
};

export default Container;
