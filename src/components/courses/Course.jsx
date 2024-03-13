function Course({course,handleSelect}) {
    const {id, name, description, photo, price, credit} = course;
  return (
    <div className="card h-min w-full bg-base-100 shadow-xl">
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
        <div className="flex w-full justify-between">
          <div>Price: {price} USD</div>
          <div>Credit: {credit} hr</div>
        </div>
        <div className="card-actions w-full">
          <button onClick={()=>handleSelect(course)} className="btn w-full btn-primary">Select</button>
        </div>
      </div>
    </div>
  );
}

export default Course;
