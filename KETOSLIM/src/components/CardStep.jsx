import PropTypes from 'prop-types';

function CardStep({ icon, title, subtitle, image, description, callouts }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[34px]">{icon}</span>
      <div className="text-[34px] text-center leading-[1.2em] font-semibold mb-1">{title}</div>
      {subtitle && <h2 className="text-[20px] mb-2 font-semibold">{subtitle}</h2>}
      {image && <img src={image} alt="" className="mb-4" />}
      {description && <p className="text-[20px] font-normal mb-2">{description}</p>}
      {callouts && <p className="mt-2 mb-6 text-[16px] text-red-500 ">{callouts()}</p>}
    </div>
  );
}

export default CardStep;

CardStep.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  callouts: PropTypes.func,
};

CardStep.defaultProps = {
  icon: null,
  subtitle: undefined,
  image: undefined,
  description: undefined,
  callouts: undefined,
};
