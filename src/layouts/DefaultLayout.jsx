// Todo App의 기본 레이아웃을 구성하는 컴포넌트
// 모든 컴포넌트를 감싸고 싶을 때!(컴포넌트를 props로 받을 수 있음) children props 활용하기!
// UI 컴포넌트가 아닌 레이아웃 용도의 컴포넌트
const DefaultLayout = ({children}) => {
    return (
      <div className="w-full h-full overflow-y-scroll bg-slate-500">
        <div className="max-w-xl mx-auto min-w-[20rem]">
            {children}
        </div>
      </div>
    )
  }
  
export default DefaultLayout;