import { useCallback, useState } from "react";
import { message } from "antd";
import { api } from "../../../Api/Index";

export const useGetUsers = () => {
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      const res = await api.getUsers();
      console.log({ res });
      setData(res.data);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err.message}`,
      });
    } finally {
      setisLoading(false);
      message.open({
        type: "success",
        content: "Berhasil tecth data",
      });
    }
  }, []);
  return [isLoading, data, getData];
};
