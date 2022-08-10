namespace OpenFin.WindowsForm.TestHarness
{
    partial class LauncherForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.menu1ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.app1MenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.app2MenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.app3MenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.workspaceManagementToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.homeToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.showToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.hideToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.storeToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.showToolStripMenuItem1 = new System.Windows.Forms.ToolStripMenuItem();
            this.hideToolStripMenuItem1 = new System.Windows.Forms.ToolStripMenuItem();
            this.menuStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // menuStrip1
            // 
            this.menuStrip1.GripMargin = new System.Windows.Forms.Padding(2, 2, 0, 2);
            this.menuStrip1.ImageScalingSize = new System.Drawing.Size(24, 24);
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.menu1ToolStripMenuItem,
            this.workspaceManagementToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Padding = new System.Windows.Forms.Padding(6, 2, 0, 2);
            this.menuStrip1.Size = new System.Drawing.Size(1276, 33);
            this.menuStrip1.TabIndex = 3;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // menu1ToolStripMenuItem
            // 
            this.menu1ToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.app1MenuItem,
            this.app2MenuItem,
            this.app3MenuItem});
            this.menu1ToolStripMenuItem.Name = "menu1ToolStripMenuItem";
            this.menu1ToolStripMenuItem.Size = new System.Drawing.Size(70, 29);
            this.menu1ToolStripMenuItem.Text = "Apps";
            // 
            // app1MenuItem
            // 
            this.app1MenuItem.Name = "app1MenuItem";
            this.app1MenuItem.Size = new System.Drawing.Size(270, 34);
            this.app1MenuItem.Text = "App1";
            this.app1MenuItem.Click += new System.EventHandler(this.app1MenuItem_Click);
            // 
            // app2MenuItem
            // 
            this.app2MenuItem.Name = "app2MenuItem";
            this.app2MenuItem.Size = new System.Drawing.Size(270, 34);
            this.app2MenuItem.Text = "App2";
            this.app2MenuItem.Click += new System.EventHandler(this.app2MenuItem_Click);
            // 
            // app3MenuItem
            // 
            this.app3MenuItem.Name = "app3MenuItem";
            this.app3MenuItem.Size = new System.Drawing.Size(270, 34);
            this.app3MenuItem.Text = "App3";
            this.app3MenuItem.Click += new System.EventHandler(this.app3MenuItem_Click);
            // 
            // workspaceManagementToolStripMenuItem
            // 
            this.workspaceManagementToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.homeToolStripMenuItem,
            this.storeToolStripMenuItem});
            this.workspaceManagementToolStripMenuItem.Name = "workspaceManagementToolStripMenuItem";
            this.workspaceManagementToolStripMenuItem.Size = new System.Drawing.Size(225, 29);
            this.workspaceManagementToolStripMenuItem.Text = "Workspace Management";
            // 
            // homeToolStripMenuItem
            // 
            this.homeToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.showToolStripMenuItem,
            this.hideToolStripMenuItem});
            this.homeToolStripMenuItem.Name = "homeToolStripMenuItem";
            this.homeToolStripMenuItem.Size = new System.Drawing.Size(270, 34);
            this.homeToolStripMenuItem.Text = "Home";
            // 
            // showToolStripMenuItem
            // 
            this.showToolStripMenuItem.Name = "showToolStripMenuItem";
            this.showToolStripMenuItem.Size = new System.Drawing.Size(158, 34);
            this.showToolStripMenuItem.Text = "Show";
            this.showToolStripMenuItem.Click += new System.EventHandler(this.showToolStripMenuItem_Click);
            // 
            // hideToolStripMenuItem
            // 
            this.hideToolStripMenuItem.Name = "hideToolStripMenuItem";
            this.hideToolStripMenuItem.Size = new System.Drawing.Size(158, 34);
            this.hideToolStripMenuItem.Text = "Hide";
            this.hideToolStripMenuItem.Click += new System.EventHandler(this.hideToolStripMenuItem_Click);
            // 
            // storeToolStripMenuItem
            // 
            this.storeToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.showToolStripMenuItem1,
            this.hideToolStripMenuItem1});
            this.storeToolStripMenuItem.Name = "storeToolStripMenuItem";
            this.storeToolStripMenuItem.Size = new System.Drawing.Size(270, 34);
            this.storeToolStripMenuItem.Text = "Store";
            // 
            // showToolStripMenuItem1
            // 
            this.showToolStripMenuItem1.Name = "showToolStripMenuItem1";
            this.showToolStripMenuItem1.Size = new System.Drawing.Size(158, 34);
            this.showToolStripMenuItem1.Text = "Show";
            this.showToolStripMenuItem1.Click += new System.EventHandler(this.showToolStripMenuItem1_Click);
            // 
            // hideToolStripMenuItem1
            // 
            this.hideToolStripMenuItem1.Name = "hideToolStripMenuItem1";
            this.hideToolStripMenuItem1.Size = new System.Drawing.Size(158, 34);
            this.hideToolStripMenuItem1.Text = "Hide";
            this.hideToolStripMenuItem1.Click += new System.EventHandler(this.hideToolStripMenuItem1_Click);
            // 
            // LauncherForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.DarkBlue;
            this.ClientSize = new System.Drawing.Size(1276, 29);
            this.Controls.Add(this.menuStrip1);
            this.Icon = global::OpenFin.WindowsForm.TestHarness.Properties.Resources.favicon;
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "LauncherForm";
            this.Text = "Winform .NET 4 Process";
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem menu1ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem app1MenuItem;
        private System.Windows.Forms.ToolStripMenuItem app2MenuItem;
        private System.Windows.Forms.ToolStripMenuItem app3MenuItem;
        private System.Windows.Forms.ToolStripMenuItem workspaceManagementToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem homeToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem showToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem hideToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem storeToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem showToolStripMenuItem1;
        private System.Windows.Forms.ToolStripMenuItem hideToolStripMenuItem1;
    }
}

