function Course({course}) {
    const {id, name, description, photo, price, credit} = course;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-5 pt-3">
        <img 
          src={photo}
          alt={name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn w-full btn-primary">Select</button>
        </div>
      </div>
    </div>
  );
}

export default Course;
