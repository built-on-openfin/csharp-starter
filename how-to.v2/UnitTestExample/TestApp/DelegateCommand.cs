using System;
using System.Windows.Input;

namespace TestApp;

public class DelegateCommand : ICommand
{

    private Func<object, bool> canExecute;
    private Action<object> execute;
    
    public DelegateCommand(Action<object> execute)
    {
        if (execute == null)
        {
            throw new ArgumentNullException("execute");
        }

        this.execute = execute;
    }

    public DelegateCommand(Func<object, bool> canExecute, Action<object> execute)
    {
        if (canExecute == null)
        {
            throw new ArgumentNullException("canExecute");
        }
        if (execute == null)
        {
            throw new ArgumentNullException("execute");
        }

        this.canExecute = canExecute;
        this.execute = execute;
    }

    public event EventHandler CanExecuteChanged;

    public bool CanExecute(object parameter)
    {
        return canExecute == null || canExecute(parameter);
    }

    public void Execute(object parameter)
    {
        execute(parameter);
    }

    public void RaiseCanExecuteChanged()
    {
        var handler = CanExecuteChanged;
        if (handler != null)
        {
            handler(this, System.EventArgs.Empty);
        }
    }

}
