import { auth, signIn, signOut } from "./auth";

const Appbar = async () => {
  const sesstion = await auth();
  return (
    <div className="p-2 bg-gradient-to-b from-slate-500 to-slate-400">
      <div className="ml-auto">
        {sesstion && sesstion.user ? (
          <div>
            <p>{sesstion.user.name}</p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit">Sign Out</button>
            </form>
          </div>
        ) : (
          <div>
            <form
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <button type="submit">Sign In</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appbar;
