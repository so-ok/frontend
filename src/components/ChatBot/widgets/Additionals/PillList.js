import PillBlockCard2 from '../../../Pill/PillBlockCard2';

const PillList = ({ cartPillList }) => {
  return (
    <PillList>
      {cartPillList && cartPillList.map(({ id, ingredient, name, image }) => <PillBlockCard2 name={name} image={image}
                                                                                             id={id} key={id}
                                                                                             ingredient={ingredient} />)}
    </PillList>
  );
};

export default PillList;