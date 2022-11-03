import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addListAction, loadingListAction } from "../../modules/PillList";
import { getlist } from "../../lib/api/articles";
import SampleListComponent from "../../components/sample/SampleListContainer";

const FetchList = () => {
  const dispatch = useDispatch();
  const { pillList } = useSelector(({ pillList }) => ({
    pillList: pillList,
  }));

  const fetchList = () => {
    dispatch(addListAction(getlist));
  };

  return <SampleListComponent pill={pillList}></SampleListComponent>;
};

export default FetchList;
