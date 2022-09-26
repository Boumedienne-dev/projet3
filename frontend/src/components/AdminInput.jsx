export default function AdminInput({ admin }) {
  return (
    <div className="inputAdmin">
      <p>
        {admin.last_name} {admin.first_name}
      </p>
    </div>
  );
}
