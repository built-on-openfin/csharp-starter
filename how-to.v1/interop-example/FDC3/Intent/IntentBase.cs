using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace OpenFin.Interop.Win.Sample.FDC3.Context
{
    public class IntentBase<T> : Openfin.Desktop.InteropAPI.Intent where T : ContextBase, new()
    {
        public IntentBase() {
            Context = new T();
        }

        [JsonProperty("name")]
        public new virtual string Name { get; set; }

        [JsonProperty("context")]
        public new virtual T Context { get; set; }
    }
}
