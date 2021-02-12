import React from "react";
import style from "../../styles/content.module.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Card from "../components/Card";
import Grid from "@material-ui/core/Grid";

// svg icons
import { FiPhone } from "react-icons/fi";
import { BsHouseFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GiWireframeGlobe } from "react-icons/gi";

// loader
import Spinner from "../components/Spinner";

import { getProfile, errorFetching } from "../store/actions";

const Container = () => {
  const { profile, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  const getProfiles = async () => {
    try {
      const userProfiles = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(getProfile(userProfiles.data));
      console.log(getProfile(userProfiles.data));
    } catch (error) {
      dispatch(errorFetching(error));
    }
  };

  React.useEffect(() => {
    getProfiles();
  }, []);

  return (
    <section className={style.root}>
      {loading ? (
        <Grid container spacing={10}>
          {profile.map((users) => {
            return (
              <Grid item xs={12} sm={6} lg={4} key={users.id}>
                <Card>
                  <div className={style.avatar}>
                    <img
                      src={`https://avatars.dicebear.com/v2/avataaars/{{${users.name}}}.svg?options[mood][]=happy`}
                    />
                  </div>
                  <div className={style.details}>
                    <h2 className={`text-center`}>{users.name}</h2>
                    <div className={style.userInfo}>
                      <p>
                        <AiOutlineMail /> {users.email}
                      </p>
                      <p>
                        <FiPhone />
                        {""} {users.phone}
                      </p>
                      <p>
                        <BsHouseFill />{" "}
                        {`${users.address.street} ${users.address.suite} ${users.address.city}`}
                      </p>
                      <p>
                        <GiWireframeGlobe />
                        <a href={`https://${users.website}`}>
                          {" "}
                          {users.website}
                        </a>
                      </p>
                      <p>
                        <HiOutlineOfficeBuilding /> {users.company.name}
                      </p>
                    </div>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Spinner />
      )}
    </section>
  );
};

export default Container;
