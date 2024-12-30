export default function StepList({title, description} : {title: string, description: string}) {
    return (
        <div>
            <h1 className="font-bold text-white">{title}</h1>
            <p className="font-medium">{description}</p>
        </div>
    )
};
